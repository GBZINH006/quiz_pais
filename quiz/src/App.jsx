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