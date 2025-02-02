import { render, screen } from "@testing-library/react"
import RestaurantCard , {withOpenLabel} from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import "@testing-library/jest-dom"

it ("should render the restaurant card in the page" , () => {

    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut")

    expect(name).toBeInTheDocument();
})

it ("should render the restaurant card with open label in the page" , () => {

    const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);

    render(<RestaurantCardWithOpenLabel resData = {MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut")
    expect(name).toBeInTheDocument();

    const label = screen.getByText("Open")
    expect(label).toBeInTheDocument();
})