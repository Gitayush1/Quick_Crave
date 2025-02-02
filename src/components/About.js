import React from 'react';
import User from './User'
import UserClass from './UserClass';
import UserContext from '../utils/UserContext.js';

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("parent componentDidMount")
    }

    render(){
        console.log("Parent render")
        return (
            <div>
                <h1>I'm about us page</h1>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
                <UserClass name2 = {"First"} name = {"Ayush Singh from Class"}/>
            </div>
        )

    }

}


export default About;