import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Player from './Pages/Player/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Components/navbar/Appbar';
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <NavScrollExample/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
