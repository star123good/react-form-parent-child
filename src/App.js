import NormalParent from './components/normal/Parent';
import RefParent from './components/ref/Parent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>1st Solution: useRef</h2>
      <RefParent />
      <h2>3rd Solution: Normal Props</h2>
      <NormalParent />
    </div>
  );
}

export default App;
