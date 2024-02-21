import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            }
        };
        console.log("child constructor");
    }

    async componentDidMount() {
        console.log("child componentDidMount");
        const data = await fetch("https://api.github.com/users/maneesh010501");
        const json = await data.json();

        // console.log(json);

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate = () => {
        console.log("component did update");
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount")
    }



    render() {
        console.log("child render");
        // const { name, location } = this.props;

        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <h2>Name:{this.state.userInfo.name}</h2>
                <h3>Location:{this.state.userInfo.location}</h3>
                <img src={avatar_url} alt="" />
                <h4>Contact:@maneesh01</h4>
            </div>
        )
    }
}

export default UserClass;