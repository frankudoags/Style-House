import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Discover from './components/Discover';
import Why from './components/Why';
import BestStores from './components/BestStores';
import WhatOurClientsSay from './components/WhatOurClientsSay';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <Explore />
      <Discover />
      <Why />
      <BestStores />
      <WhatOurClientsSay />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
