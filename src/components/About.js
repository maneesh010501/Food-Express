import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
// import User from "./User";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props);
        // console.log("parent constructor");
    }

    componentDidMount = () => {
        // console.log("parent componentDidMount");
    }

    render() {
        // console.log("parent render")
        return (
            <div>
                <h1>About Class based Component</h1>
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h1 className="text-xl font-semibold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h2>This is About Page</h2>
                <UserClass name={"maneesh class"} location={"Hyd"} />
                {/* <User /> */}
            </div>
        )
    }
}

export default About;