import { Routes, Route, Navigate} from 'react-router-dom'
import Home from './Home';
import Meals from './Meals';
import Foodetails from './Foodetails'
import NavBar from './NavBar';
import Popmeals from './Popmeals';
import Dessert from './Dessert';

const App = () => {
  
  return (
    <>
    
      
      <NavBar/>
      <Routes>
      <Route path="/" element={<Navigate to="" />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/meals' element={<Meals/>}/>
      <Route path='/pop' element={<Popmeals/>}/>
      <Route path='/dessert' element={<Dessert/>}/>
      <Route path='/foodetails/:id' element={<Foodetails/>}/>
      </Routes> 
       
        
    </>
  );
};

export default App;
