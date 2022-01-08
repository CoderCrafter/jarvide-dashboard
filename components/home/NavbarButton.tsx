interface NavbarButtonProps {
    text: string;
};

const HomeNavbarButton = ({ text }: NavbarButtonProps) => {
    return (
        <button className="border-t-4 text-white px-4 hover:border-gray-600 hover:text-gray-600 duration-300">{ text }</button>
    );
}

export default HomeNavbarButton;