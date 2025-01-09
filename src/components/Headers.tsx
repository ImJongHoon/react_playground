import { Link } from "react-router-dom"

function Headers(){
    return (
        <header>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </header>
    )
}

export default Headers;