import { Dispatch } from "react";

interface NavbarButtonProps {
    text: string;
    onClick?: Dispatch<any>
};

const HomeNavbarButton = ({ text, onClick }: NavbarButtonProps) => {
    return (
        <button className="border-t-2 hover:border-t-4 text-white px-4 hover:border-gray-600 hover:text-gray-600 duration-300" onClick={onClick}>{ text }</button>
    );
}

export default HomeNavbarButton;