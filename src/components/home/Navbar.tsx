import HomeNavbarButton from "./NavbarButton";
import { Dispatch } from 'react'

const HomeNavbar = ({toggle}: {toggle: Dispatch<any>}) => {
    return (
        <div className="flex flex-row justify-center bg-gray-400 w-screen h-16 z-20 shadow-md">
            <HomeNavbarButton text="Dashboard"/>
            <HomeNavbarButton text="Features"/>
            <HomeNavbarButton text="Commands"/>
            <HomeNavbarButton text="Toggle" onClick={toggle}/>
        </div>
    );
}

export default HomeNavbar;