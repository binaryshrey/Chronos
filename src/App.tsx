import Home from './components/home/Home';
import Login from './components/login/Login';
import PageNotFound from './components/not-found/PageNotFound';
import Register from './components/signup/Register';
import Success from './components/Success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
