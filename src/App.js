import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/Views/About';
import FunFact from './components/Views/FunFact';
import PartnerImages from './components/Views/partner/PartnerImages';
import Services from './components/Views/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <FunFact />
      <PartnerImages />
      <Footer />
    </div>
  );
}

export default App;
