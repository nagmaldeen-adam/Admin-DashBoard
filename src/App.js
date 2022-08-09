import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './style/dark.scss';
import { useContext } from 'react';
import Home from './pages/home/home.js';
import List from './pages/list/list.jsx';
import Single from './pages/single/single.jsx';
import New from './pages/new/new.jsx';
import { productInputs, userInputs } from './formsource.js';
import { DarkModeContext } from './component/context/context';

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
      <Routes>
       <Route path="/" >
        <Route index element={<Home />} />
        <Route path="user" >
           <Route index element={<List />}/>
           <Route path=":userId" element={<Single />}/>
           <Route path="new" element={<New title="Add New User" inputs={userInputs} />}/>
        </Route>
        <Route path="product" >
           <Route index element={<List />}/>
           <Route path=":productId" element={<Single />}/>
           <Route path="new" element={<New  title="Add New Product" inputs={productInputs} />}/>
        </Route>
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
