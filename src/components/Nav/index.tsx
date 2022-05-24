import { useState } from 'react'
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'
import NavItem from './NavItem'

const defaultIconSize = "1.8rem"

const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} />, active: false },
    { label: 'About', icon: <BiInfoCircle size={defaultIconSize} />, active: false }
]

const NavItemsContainer = () => (
    <>
        {
            items.map((item, i) => (
                <NavItem key={i} item={item} />
            ))
        }
    </>
)

function Nav() {

    const [hidden, setHidden] = useState(false)

    return (
        <nav className="col-span-1 bg-cyan-200 sm:border-b sm:border-primary ">
            <div className="flex md:block mx-4 justify-between items-center">
                <h4 className="
                    uppercase font-bold 
                    text-primary text-right
                    py-4 md:border-b md:border-primary 
                ">
                    Phimmoi.net
                </h4>
                <BiMenu
                    className="cursor-pointer md:hidden"
                    size={defaultIconSize}
                    onClick={() => setHidden(prev => !prev)}
                />
            </div>

            <ul className={`
                md:block mx-4 my-2 
                ${hidden ? '' : 'hidden'} 
            `}>
                <NavItemsContainer />
            </ul>
        </nav >
    );
}

export default Nav;

