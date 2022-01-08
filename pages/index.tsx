import HomeHeader from "../components/home/Header";
import HomeMainBody from "../components/home/MainBody";
import HomeNavbar from "../components/home/Navbar";

function Home() {
  return (
    <div className="flex flex-col max-h-screen">
      <HomeNavbar/>
      <HomeHeader/>
      <HomeMainBody/>
    </div>
  );
}

export default Home;
