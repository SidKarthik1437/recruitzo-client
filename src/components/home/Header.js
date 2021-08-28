import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes"


function Header() {
    return (
        <div className="flex w-full items-center justify-between">
            <img className="h-14 ml-5 mt-4" src="/assets/logo/logotrans.png" alt="" />
            <div className="flex space-x-10 mr-5 text-dark font-medium items-center tracking-wide">
                <Link to={ROUTES.HOME} className="cursor-pointer" >HOME</Link>
                <Link to={ROUTES.ABOUT} className="cursor-pointer" >ABOUT US</Link>
                <Link to={ROUTES.CONTACT} className="cursor-pointer" >CONTACT US</Link>
                <Link to={ROUTES.LOGIN} className="cursor-pointer" >LOGIN</Link>
                <Link to={ROUTES.SIGNUP} className="cursor-pointer" >
                    <button className="bg-dark text-white h-8 w-20 rounded-full ">
                        SIGNUP
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header
