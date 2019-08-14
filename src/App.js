import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import MainPage from './components/MainPage'

function App() {
  return (
    <Provider store={store}>
      <MainPage></MainPage>
    </Provider>
  );
}

export default App;
