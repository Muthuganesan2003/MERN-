import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Nav from './components/nav';
import{BrowserRouter,Routes,Route} from "react-router-dom";
const App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  );

};
export default App;