import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Nav";

// PAGES
import Index from "./Pages/Index";
import Show from "./Pages/Show";
// import Edit from "./Pages/Edit";
// import New from "./Pages/New";
import Home from "./Pages/Home";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/birds" element={<Index />} />
        {/* <Route path="/birds/new" element={<New />} /> */}
        <Route path="/birds/:id" element={<Show />} />
        {/* <Route path="/birds/:id/edit" element={<Edit />} /> */}
      </Routes>
    </main>
  );
}

export default App;
