const Dog = () =>{
    return React.createElement("div",{},[
        React.createElement('h3',{},"Bull Terier"),
        React.createElement('h3',{},"Bull Terier"),
        React.createElement('h3',{},"Bull Terier"),
    ])
}
const App = () => {
    return React.createElement(
        "div", {}, [
            React.createElement("h2",{},"React Basics"),
            React.createElement(Dog),
            React.createElement(Dog),
        ]
    );
};

ReactDOM.render(
    React.createElement(
        App,null, null
        ), document.getElementById('root')
    );

