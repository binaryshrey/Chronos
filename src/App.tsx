import Home from "./components/home/Home";
import Login from "./components/login/Login";
import {Routes, Route} from "react-router-dom";
import PageNotFound from "./components/not-found/PageNotFound";
import Register from "./components/signup/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
