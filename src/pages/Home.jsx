import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import Trending from "../components/home/Trending";
import MostPlayed from "../components/home/MostPlayed";
import Categories from "../components/home/Categories";
import Promo from "../components/home/Promo";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories />
      <Promo />
    </>
  );
}

export default Home;
