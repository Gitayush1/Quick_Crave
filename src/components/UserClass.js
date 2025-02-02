import React, { use } from 'react'

class UserClass extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                bio : "dummy",
                login : "dummy"
            }
        }
        console.log(this.props.name2 + " child constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name2+" child componentDidMount")
        // API call
        const data = await fetch("https://api.github.com/users/GitAyush1");
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo : json
        })
    }

    render(){
        const {name,bio,login} = this.state.userInfo;
        const {count} = this.state;

        return (
            <div  className='user-card'>
                <h2>Name: {name}</h2>
                <h3>Bio: {bio}</h3>
                <h3>Username: {login}</h3>
            </div>
        )
    }
}

export default UserClass;