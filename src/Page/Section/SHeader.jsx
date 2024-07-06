import { NavLink } from "react-router-dom"
import "./Header.css"
const SHeader = () => {
return (
    <div className="header">
    <div className="name">
    <h2>HOLIK ENTERPRISE</h2>
    </div>
    <div className="info">
    </div>
    <div className="ret">
    <NavLink to="/"><button>RETURN</button></NavLink>
    </div>
    </div>
)
}
export default SHeader