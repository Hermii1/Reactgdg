import {Route,Routes, Link} from "react-router-dom";
import './App.css';

function Home() {
  return <p>welcome to the home page</p>;
}
function About() {
  return <p> welcome to the about page</p>;
}
function Contact() {
  return <p>contact us at lala@gmail.com</p>;
}
function NotFound(){
  return <h1>oops! page not found</h1>;
}
function App() {
  return(
    <div>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );  
}

export default App;
