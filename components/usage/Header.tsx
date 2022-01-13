const Box1 = () => {
    return (
        <div className="flex flex-col bg-dark-800 text-center w-80 h-48 py-4 space-y-4 rounded-md shadow-lg shadow-neutral-800">
            <h1 className="text-4xl">1</h1>
            <h3 className="text-2xl text-gray-3=00">RUN THE IDE COMMAND</h3>
            <h5 className="text-md text-gray-400">
                Type the command: jarvide ide | in any server which the bot is present in.
            </h5>
        </div>
    );
}

const Box2 = () => {
    return (
        <div className="flex flex-col bg-dark-800 text-center w-80 h-48 py-4 space-y-4 rounded-md shadow-lg shadow-neutral-800">
            <h1 className="text-4xl">2</h1>
            <h3 className="text-2xl text-gray-3=00">EDIT YOUR DREAM DOC</h3>
            <h5 className="text-md text-gray-400">
                From there you will have the ability to upload and create documents with ease.
            </h5>
        </div>
    );
}

const Box3 = () => {
    return (
        <div className="flex flex-col bg-dark-800 text-center w-80 h-48 py-4 space-y-4 rounded-md shadow-lg shadow-neutral-800">
            <h1 className="text-4xl">3</h1>
            <h3 className="text-2xl text-gray-3=00">SAVE IT TO THE CLOUD</h3>
            <h5 className="text-md text-gray-400">
                All you need is a click of a button for your project to be saved to our cloud.
            </h5>
        </div>
    );
}

const Header = () => {
    return (
        <div className="flex flex-col p-36 items-center bg-black text-gray-200">
            <div className="space-y-7">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-4xl">HOW TO USE OUR BOT</h1>
                    <h4 className="text-gray-400"> Our bot has many uses - from commands to its integrated IDE.</h4>
                </div>

                <div className="flex flex-row space-x-6">
                    <Box1/>
                    <Box2/>
                    <Box3/>
                </div>
            </div>

        </div>
    );
}

export default Header;