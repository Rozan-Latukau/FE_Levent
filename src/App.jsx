
import { Route, Routes } from "react-router-dom";
import PageSignin from "@/pages/signin/index";
// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<>home</>} />
      <Route path="signin" element={<PageSignin />} />
    </Routes>
  )
}

export default App;
