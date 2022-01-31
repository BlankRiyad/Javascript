function Grid() {
    return (
        <div className="container">
        <div className="header">Header</div>
        <div className="menu">Menu</div>
        <div className="content">Content</div>
        <div className="footer">Footer</div>
        </div>
    )    
}

ReactDOM.render(
    <Grid />,
    document.getElementById("root")
)