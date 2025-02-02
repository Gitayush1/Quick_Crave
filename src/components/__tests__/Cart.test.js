import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu.js";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore.js";
import { Provider } from "react-redux";
import Header from "../Header.js";
import Cart from "../Cart.js"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Load resMenu with add to cart functionality", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart/>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  screen.debug();

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const clearCart = screen.getByRole("button" , {name : "Clear Cart"})
  fireEvent.click(clearCart);
//   expect(screen.getByText("")).toBeInTheDocument()

});
