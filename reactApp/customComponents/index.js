/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */


function CustomComponent() {
  return (
    <div>
  <img src="./react-logo.png" alt="Girl" width="40px" height=""></img>
  <h1>Fun facts about react</h1>
  <ol>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise including mobile apps</li>
  </ol>
  </div>
    
  )
}

ReactDOM.render(
  <CustomComponent />,
  document.getElementById("root")
)