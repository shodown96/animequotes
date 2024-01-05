import { Outlet } from "react-router-dom"
import { Navbar, SEO } from "../components"

function Main() {
    return (
        <div>
            <SEO />
            <Navbar />
            <div className="text-primary">
                <Outlet />
            </div>
        </div>
    )
}

export default Main