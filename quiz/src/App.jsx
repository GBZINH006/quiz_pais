
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

import { Routes, Route} from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import QuizPage from '../pages/QuizPage'
import WinPage from '../pages/WinPage'

export default function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/win" element={<WinPage />}></Route>
      </Routes>
    </div>
  )
}

