import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../MockData/restaurantCardMock.json";

it("Should render restaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Tulsi Hotel");

  expect(name).toBeInTheDocument();
});

it("Should render restaurantCard component with Promoted label", () => {
  const RestaurantCardPromotedComp = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromotedComp resData={MOCK_DATA} />);

  const label = screen.getByText("VEG");

  expect(label).toBeInTheDocument();
});
