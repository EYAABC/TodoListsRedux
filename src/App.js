import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/AddTodo';
import Filtre from './components/Filtre';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoLists/>
      <hr/>
      <Filtre/>
    </div>
  );
}

export default App;