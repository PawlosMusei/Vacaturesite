import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Header from "./components/Header";
import Home from "./pages/home.jsx";
import Admin from "./pages/admin.jsx";
import Applications from "./pages/applications.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Create from "./pages/create.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/create" element={<Create/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
