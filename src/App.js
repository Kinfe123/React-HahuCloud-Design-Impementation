
import './App.css';
import Good from './components/Good';
import Listens from './components/Listens';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Listens />
      <Pricing />
      <Good />
      <Payment />
      
    </div>
  );
}

export default App;
