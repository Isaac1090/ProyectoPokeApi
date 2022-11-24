
import './App.css';
import Pokemonlist from './components/Pokemonlist';
import SearchPokemon from './components/SearchPokemon';
import Filtro from './components/Filtro';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Pokedex</h1>
        <small class="text-muted">Esta tu pokemon en este Pokedex?</small>
        <SearchPokemon />
        <Filtro />
        <Pokemonlist />

       
        
      </header>
    </div>
  );
}

export default App;
