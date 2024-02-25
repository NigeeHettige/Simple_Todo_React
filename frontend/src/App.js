import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Userdashboard from './pages/Userdashboard';
import Add from './pages/Add'
import Update from './pages/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Userdashboard/>}/>
          <Route path='/add'  element={<Add/>}/>
          <Route path='/update/:id' element ={<Update/>}/>
          <Route path='/:id' element ={<Userdashboard/>}/>
         
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
