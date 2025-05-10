import { NavLink } from "react-router-dom"


const Header = ()=>{
    return <div>
        <div className="flex justify-between px-20 mt-2">
        <h1 className="font-semibold text-2xl text-nowrap text-blue-900 ">Hospital</h1>
        
        <ul className="flex gap-10 font-semibold text-xl text-nowrap text-blue-900">
           <NavLink to="/"> <li>Home</li></NavLink>
           <NavLink to="/about"><li>About</li></NavLink> 
           <NavLink to="/contact"> <li>Contact</li></NavLink>
        </ul>

        <button className="bg-blue-900 px-10 rounded-xl hover:bg-blue-500 text-white">Click</button>
        </div>
    </div>
}

export default Header