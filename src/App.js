import './App.css';
import Home from './components/home';
import Request from './components/request';
import Done from './components/done';
import Contact_us from './components/contact_us';
import About_us from './components/about_us';
import Terms from './components/terms';
import{ Route, Routes}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/req"  element={<Request/>} />
      <Route path="/done"  element={<Done/>} />
      <Route path="/contact_us"  element={<Contact_us/>} />
      <Route path="/terms"  element={<Terms/>} />
      <Route path="/about_us"  element={<About_us/>} />
      </Routes>
    </div>

  );
}

export default App;
