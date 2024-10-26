import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store";
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([{
  path: "/"
}])

function App() {
  return (
   <Provider store={store}> 
    <div className="App">
      <Head />
      <Body />


      {/**
        * Head
        * Body
          * Sidebar 
             * MenuItems  
          * MainContainer
             * ButtonList
             * VideoContainer
                * VideoCard 
        */}
    </div>
    </Provider> 
  );
}

export default App;
