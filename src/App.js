import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Maincomponent from './components/Maincomponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Maincomponent/>
     </BrowserRouter>
    </div>
  );
}

export default App;
