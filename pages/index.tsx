import DiscordBar from "../components/home/DiscordBar";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navbar";
import Sections from "../components/home/Sections";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jarvide</title>
        <meta content="Jarvide" />
        <meta content="Discord bot with an integrated IDE" />
        
      </Head>
      <div className="flex flex-col">
        <Navbar />
        <Header />
        <DiscordBar />
        <Sections />
        <Footer />
      </div>
    </>

  );
}

export default Home;