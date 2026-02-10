import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
  const isLogged = !!localStorage.getItem("username");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogged ? <Navigate to="/quiz" /> : <Login />} />
        <Route path="/quiz" element={isLogged ? <Quiz /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
