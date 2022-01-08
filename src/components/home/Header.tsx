import { NextComponentType } from "next";

const HomeHeader = () => {
    return (
        <div className="py-16 bg-gray-300 text-center space-y-8 z-10 shadow-md">
            <h1 className="text-8xl tracking-widest font-mono">
                JARVIDE
            </h1>

            <h1 className="text-2xl tracking-widest font-mono">
                THE AI OF THE FUTURE
            </h1>
        </div>
    );
};

export default HomeHeader