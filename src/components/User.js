import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    const {name} = props;
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Una</h3>
            <h3>Contact: kunwarayush23@gmail.com</h3>
        </div>
    )
}

export default User;