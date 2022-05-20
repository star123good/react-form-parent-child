import NormalParent from './components/NormalParent';
import RefParent from './components/RefParent';
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
