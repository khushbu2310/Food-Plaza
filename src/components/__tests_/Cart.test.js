import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../MockData/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("Should load restaurantMenu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Sandwich (4)");
  fireEvent.click(accordianHeader);

  const totalItems = screen.getAllByTestId("foodItem");
  expect(totalItems.length).toBe(4);

  expect(screen.getByText("Cart: (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart: (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart: (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(6);

  const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItem").length).toBe(4);
  const emptyCartText = screen.getByText("Your cart is empty");
  expect(emptyCartText).toBeInTheDocument();
});
