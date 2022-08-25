import './App.css';
import Home from './components/home';
import Request from './components/request';
import Done from './components/done';
import{ Route, Routes}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/req"  element={<Request/>} />
      <Route path="/done"  element={<Done/>} />
      </Routes>
    </div>

  );
}

export default App;
