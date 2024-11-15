
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;