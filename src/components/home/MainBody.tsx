let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const HomeMainBody = () => {
    return (
        <div className="flex flex-col bg-gray-200 dark:bg-white w-screen h-screen items-center p-12">
            <p className="max-w-2xl text-center">{text}</p>

            <button className="tracking-widest bg-gray-600 text-white mt-24 px-24 py-2 hover:bg-gray-400  hover:shadow-md hover:rounded-lg duration-300">
                INVITE 
            </button>

        </div>
    );
}

export default HomeMainBody;