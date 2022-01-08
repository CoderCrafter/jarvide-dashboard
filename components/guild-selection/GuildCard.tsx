import Image from "next/image";

interface guildCardDataType {
    guildName: string,
    iconURL: string,
    botInServer: boolean
}

const GuildCard = ({guildName, iconURL, botInServer}: guildCardDataType) => {
    return (
        <div className="flex flex-col items-center p-4 bg-slate-300 m-4 w-64 h-72 rounded-xl shadow-lg">
            <Image className="rounded-full" alt="" width={128} height={128} src={iconURL}/>
            <h2 className="text-xl text-center mt-4">{guildName}</h2>
            <button className="bg-gray-700 text-white border-2 border-gray-700 hover:bg-transparent hover:text-black hover:shadow-lg px-4 py-1 rounded-md mt-8 duration-200">
                {botInServer ? 'Dashboard' : 'Invite'}
            </button>
        </div>
    );
}

export default GuildCard;