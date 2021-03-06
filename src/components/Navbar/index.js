import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
    Nav,
    NavbarContainer,
    NavIcon,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarElements"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const navMolt = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    useEffect(() => {
        navMolt()
        window.addEventListener("scroll", navMolt)
    }, [])
    
    return (
        <>
         <IconContext.Provider value={{ color: "#141414"}}>
             <Nav active={scroll} click={click}>
                 <NavbarContainer>
                     <NavLogo to="/">
                         <NavIcon />
                            Padawan
                     </NavLogo>
                     <MobileIcon onClick={handleClick}>
                         {click ?  <FaTimes /> : <FaBars />}
                     </MobileIcon>
                     <NavMenu onClick={handleClick} click={click}>
                         <NavItem>
                             <NavLinks to="/">Home</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to="/Projets">Projets</NavLinks>
                         </NavItem><NavItem>
                             <NavLinks to="/About">About</NavLinks>
                         </NavItem>
                     </NavMenu>
                 </NavbarContainer>

             </Nav>
         </IconContext.Provider>
        </>
    )
}
export default Navbar