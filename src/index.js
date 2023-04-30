import React from "react";
import ReactDOM from "react-dom";

function Header(){
    return(
        <header>
            <nav className="nav">
            <img className="image" src="react2.png" />
            <ul className="nav-items">
            <li>pricing</li>
            <li>about</li>
            <li>contact</li>
            </ul>
            </nav>
        </header>
    )
}

function Purpose(){
    return(
        <div>
        <h1>Reasons why i'm exited to learn React</h1>,
        <ol>
        <li>it'a hireable skill</li>
        <li>to start my projects sooner</li>
        <li>to find a good job </li>
        <li>it looks great</li>
        </ol>
        </div>
    )
}
function Footer(){
    return(
        <footer>
                2023 -last name here- development. All rights reserved.
            </footer>
    )
}

function Page(){
    return (
        <div>
        <Header/>
        <Purpose/>  
        <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>,document.getElementById("root"));

