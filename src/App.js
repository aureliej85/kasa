import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';
import {AllRoutes} from './AllRoutes'

function App() {
  return (
    <div className="App">
      <div className='pageApp'>
      <Header />
      <AllRoutes/>

      </div>    
      <Footer />
    </div>
  );
}

export default App;
