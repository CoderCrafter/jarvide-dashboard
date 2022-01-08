import HomeNavbarButton from "./NavbarButton";

const HomeNavbar = () => {
    return (
        <div className="flex flex-row justify-center bg-gray-400 w-screen h-16 z-20 shadow-md">
            <HomeNavbarButton text="Dashboard"/>
            <HomeNavbarButton text="Features"/>
            <HomeNavbarButton text="Commands"/>
        </div>
    );
}

export default HomeNavbar;