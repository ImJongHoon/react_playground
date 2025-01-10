import { Link, useNavigate } from "react-router-dom"

function Header(){
    const navigate = useNavigate()
    const onAboutClick = () => {
        navigate("/about")
    }
    return (
        <header>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li>
                    <button onClick={onAboutClick}>about으로</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;