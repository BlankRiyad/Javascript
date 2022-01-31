// import "./index.css"

function Grid() {
    return (
        <div className="container">
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
        </div>
    )    
}

ReactDOM.render(
    <Grid />,
    document.getElementById("root")
)