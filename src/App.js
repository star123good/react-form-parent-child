import { Provider } from 'react-redux';
import store from './store';
import NormalParent from './components/normal/Parent';
import RefParent from './components/ref/Parent';
import ReduxParent from './components/redux/Parent';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h2>1st Solution: useRef</h2>
        <RefParent />
        <h2>3rd Solution: Normal Props</h2>
        <NormalParent />
        <h2>5th Solution: Redux</h2>
        <ReduxParent />
      </div>
    </Provider>
  );
}

export default App;
