// import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props)
    }


render() {
    const welcome = this.props.name;
    return (
        <div>
            <h1>{welcome}</h1>
            <p>Welcome to my first code!</p>
        </div>
    )
}
}


ReactDOM.render(
    <App name="Sarah Smith" />,
    document.getElementById("root"));