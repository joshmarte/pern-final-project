import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav";

// PAGES
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Home from "./Pages/Home";
import NavBoot from "./Components/NavBoot";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <main className="App">
      <NavBoot />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/birds" element={<Index />} />
        <Route path="/birds/new" element={<New />} />
        <Route path="/birds/:id" element={<Show />} />
        <Route path="/birds/:id/edit" element={<Edit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
