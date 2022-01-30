function Feelings() {
    return (
        <div>
            <h1>My feelings for React!</h1>
            <ul>
                <li>React is shorter</li>
                <li>Easy to Debug</li>
                <li>Highly reusable</li>
                <li>structure is much more similer with js and html</li>
            </ul>
        </div>
    )    
}

ReactDOM.render(
    <Feelings />, 
    document.getElementById("root")
)