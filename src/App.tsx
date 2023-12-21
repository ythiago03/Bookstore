import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import Home from './pages/Home/Home';
import Add from './pages/Add';
import Update from './pages/Update';
import Books from './pages/Books/Books';
import Cart from './pages/Cart/Cart';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
