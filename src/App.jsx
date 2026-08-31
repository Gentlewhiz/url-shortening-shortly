import Header from "./components/Header";
import Hero from "./components/Hero";
import ShortenerSection from "./components/ShortenerSection";
import StatisticsSection from "./components/StatisticsSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <ShortenerSection />
      <StatisticsSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
