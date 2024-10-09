import Todo from './components/Todo';
import Header from './components/Header';
import './components/css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      {/* <InlineComponent />
      <OutlineComponent/> */}
    </div>
  );
}

export default App;
