import './App.css';
import DialogueListContainer from '../DialogueListContainer/DialogueListContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
function App() {
  return (
    <div className="App">
      <SearchContainer></SearchContainer>
      <DialogueListContainer></DialogueListContainer>
    </div>
  );
}

export default App;
