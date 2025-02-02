import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

// Grouping of test cases
describe("Contact us page test cases",() => {

    it("Should load contact us component" , () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    })
    
    it("Should load button inside Contact us component" , () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    
    })
    
    test("Should load input name in contact us component" , () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Name") // "name" will throw an error
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    
    })
    
    test("Should load 2 input boxes in contact us component" , () => {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    
    })
})
