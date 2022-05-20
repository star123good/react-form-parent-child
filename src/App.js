import { Provider } from 'react-redux';
import store from './store';
import { FormProvider } from './contexts/form';
import RefParent from './components/1_ref/Parent';
import NormalParent from './components/3_normal/Parent';
import ReduxParent from './components/5_redux/Parent';
import ContextParent from './components/6_context/Parent';
import './App.css';

function App() {
  return (
    <Provider store={store} >
      <FormProvider>
        <div className="App">
          <h2>1st Solution: useRef</h2>
          <RefParent />
          <h2>3rd Solution: Normal Props</h2>
          <NormalParent />
          <h2>5th Solution: Redux</h2>
          <ReduxParent />
          <h2>6th Solution: Context</h2>
          <ContextParent />
        </div>
      </FormProvider>
    </Provider>
  );
}

export default App;
