import DiscordBar from "../components/home/DiscordBar";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";
import Sections from "../components/home/Sections";

function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Header/>
      <DiscordBar/>
      <Sections/>
      <Footer/>
    </div>
  );
}

export default Home;