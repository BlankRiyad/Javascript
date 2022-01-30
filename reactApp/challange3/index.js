/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

const header = (
           <header>
                <nav className="nav">
                    <img src="./react-logo.png" className="nav-logo"></img>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>Details</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            )

const mainContent = (
    <div>
      <h1>Reasons I'm excited to learn React</h1>

      <ol>
         <li>I want to be a developer</li>
         <li>React is easy to learn</li>
         <li>It is a javascript framework</li>
         <li>I don't know actually</li>
      </ol>
    </div>
)

function Footer() {
    return (
    <footer align="center">
    <small>© 2022 <em>BlankTech</em> development. All rights reserved.</small>
    </footer>
    )
}

function Challange3() {
    return (
        <div>
            {header}
            {mainContent}
            <Footer />
        </div>
    )
    
}

ReactDOM.render(
    <Challange3 />, document.getElementById("root")
)