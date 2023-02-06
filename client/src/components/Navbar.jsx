
import { useState } from "react";
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';
//import {panels} from '../pages';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-1 justify-between items-center navbar">

            <div>
                <a href="/">
                    <img src={logo} alt="EnergyPlus" className="w=[180px] h-[100px]"/>
                </a>
            </div>

            

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li 
                    key={nav.id} 
                    className={`font-poppins font-normal cursor-pointer text-[28px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-28'} text-gray`}>
                        <a href={`${nav.id}`} >
                        {nav.title}
                        </a>
                    </li>
                ))}
            </ul>


            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu}
                alt="menu"
                className="w=[28px] h=[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}>

                    <ul className="list-none flex flex-col justify-center items-center flex-1">
                        {navLinks.map((nav, index) => (
                        <li 
                            key={nav.id} 
                            className={`font-poppins font-normal cursor-pointer text-[28px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                            <a href={`${nav.id}`} >
                                {nav.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>









    )
}
export default Navbar;