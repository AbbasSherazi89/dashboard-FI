
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './app.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import UserProfile from "./Pages/UserProfile";
import Base from "./Components/Layout/Base";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
function App() {
  return (
  <>
    <BrowserRouter>
    <Base>
    <Routes>
      <Route index path="/" element={<Login/>}/>
      <Route index path="/signup" element={<SignUp/>}/>
      <Route index path="/user_profile" element={<UserProfile/>}/>
    </Routes>
    </Base>
    </BrowserRouter>
  </>
  );
}

export default App;
