const { render, act, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search the resList with pizza", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard")

  expect(cardsBeforeFilter.length).toBe(20)

  const searchBtn = screen.getByRole("button", {name : "Search"})

  const searchInput = screen.getByTestId("searchInput")

  fireEvent.change(searchInput , {target : { value : "pizza"}})

  fireEvent.click(searchBtn)

  const cardsAfterSearch = screen.getAllByTestId("resCard")

  expect(cardsAfterSearch.length).toBe(3)

});

it("Should filter the top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard")
    expect(cardsBeforeFilter.length).toBe(20)

    const filterBtn = screen.getByRole("button", {name : "Top Rated Restaurants"})
    fireEvent.click(filterBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard")
    expect(cardsAfterFilter.length).toBe(4)
  
  });
