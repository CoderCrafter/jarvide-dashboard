import HomeHeader from "../components/home/Header";
import HomeMainBody from "../components/home/MainBody";
import HomeNavbar from "../components/home/Navbar";
import { useToggle } from "../reducers/hook"

function Home() {
  const [theme, setTheme] = useToggle();
  return (
    <div className="flex flex-col max-h-screen">
      <HomeNavbar toggle={() => setTheme(theme === 'light' ? 'light' : 'dark')}/>
      <HomeHeader/>
      <HomeMainBody/>
    </div>
  );
}

export default Home;
