import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
import Theme from "./components/theme/Theme";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="">
      <Routes>
        {!user && <Route path="/" element={<Navigate replace to="/login" />} />}
        {user && <Route path="/" element={<Main />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/theme" element={<Theme showThemeModal={undefined} onClose={undefined} />} />
      </Routes>
    </div>
  );
}

export default App;
