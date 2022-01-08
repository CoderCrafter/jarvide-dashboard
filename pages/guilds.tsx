import GuildCard from "../components/guild-selection/GuildCard";

function Guilds() {
    return (
        <div className="flex">
            <GuildCard guildName="Jarvide Support Server" botInServer={true} iconURL="https://cdn.discordapp.com/icons/926115595307614249/85776732ac4517d587ec255f9f53d19a.webp?size=4096"/>
            <GuildCard guildName="Jarvide Support Server" botInServer={true} iconURL="https://cdn.discordapp.com/icons/926115595307614249/85776732ac4517d587ec255f9f53d19a.webp?size=4096"/>
            <GuildCard guildName="Jarvide Support Server" botInServer={true} iconURL="https://cdn.discordapp.com/icons/926115595307614249/85776732ac4517d587ec255f9f53d19a.webp?size=4096"/>
        </div>

        
    );
}

export default Guilds;