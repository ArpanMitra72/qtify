import HeroSection from "./components/HeroSection/HeroSection";
import Card from "./components/Card/Card";
import NewAlbumCard from "./components/Card/NewAlbumCard";
import NavBar from "./components/NavBar/NavBar";
import Songs from "./components/Songs/Songs";
import Footer from "./components/Footer/Footer";
import styles from "./App.css";

function App() {
  return (
    <div className={styles.MainBox}>
      <NavBar />
      <HeroSection />
      <Card />
      <NewAlbumCard />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;
