import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IPartialGuildType {
    id: string,
    name: string,
    icon: string,
    owner: boolean,
    permissions: string,
    features: string[],
}

interface IGuildPropType {
    iconURL: string,
    name: string,
    id: string,
}

async function getGuilds(token: string) {
    const res = await axios({
        baseURL: 'https://discord.com/api/v8',
        url: '/users/@me/guilds',
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    console.log(await res.data);
    return await res.data;
}

function getAccessToken() {
    let token;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem("access_token");
    }
    return token;
}

const DashboardButton = () => {
    return (
        <button className="w-32 h-8 bg-lush-700 rounded-md hover:bg-lush-800 text-gray-200 duration-200">
            Dashboard
        </button>
    );
}

const Guild = ({iconURL, name, id}: IGuildPropType) => {
    useEffect(() => {
        localStorage.removeItem('access_token');
    });

    return (
        <div className="flex flex-col items-center w-max pb-8">
            <div className="p-2">
                <Image className="rounded-md" src={iconURL} alt="Guild icon" width={200} height={200}/>
            </div>

            <div className="text-gray-300 w-48 text-center">
                <p>{name}</p>
            </div>

            <div className="mt-2">
                <DashboardButton/>
            </div>

        </div>
    );
}

function toGuildComponent({icon, name, id}: IPartialGuildType) {
    let iconURL;
    if(icon) {
        iconURL = `https://cdn.discordapp.com/icons/${id}/${icon}.png?size=1024`;
    } else {
        iconURL = "https://cdn.discordapp.com/embed/avatars/1.png"; // Default gray avatar
    }
    return <Guild iconURL={iconURL} id={id} name={name} key={id}/>;
}

const Guilds = () => {
    const [data, setData] = useState<Array<IPartialGuildType>>();

    useEffect(() => {
        const token = getAccessToken();
        if(!token) return;

        (async () => {
            const guilds = await getGuilds(token);
            setData(guilds);
        })();
    }, []);

    if(!data) return <p>Loading severs...</p>;

    return (
        <div className="flex items-center justify-center p-12 bg-dark-900">
            <div className="flex flex-col flex-wrap bg-dark-850 space-y-8 rounded-lg shadow-md">
                <div>
                    <h1 className="text-3xl text-gray-300">Guilds ({data.length})</h1>
                </div>

                <div className="flex flex-row flex-wrap max-w-6xl">
                    {data.map(guild => toGuildComponent(guild))}
                </div>
                
            </div>
        </div>
        
    );

}

export default Guilds;