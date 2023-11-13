import './App.css';
import Affichage from './components/Affichage';
import Moins from './components/Moins';
import Plus from './components/Plus';

function App() {
  return (
    <div className="App">
      <Affichage />
      <Plus />
      <Moins />
    </div>
  );
}

export default App;
