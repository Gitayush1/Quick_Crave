import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

it("should render the header component with a login button", () => {
    render (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "login"});
    expect(loginButton).toBeInTheDocument();
})

it("should render the header component with cart items = 0", () => {
    render (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0 items)")
    expect(cartItems).toBeInTheDocument();
})

it("should render the header component with a cart", () => {
    render (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/) //Passed a Rejex
    expect(cart).toBeInTheDocument();
})

it("should make the login button to logout button on Click", () => {
    render (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button" , {name  : "logout"})

    expect(logoutButton).toBeInTheDocument();
})