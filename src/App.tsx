import Home from './components/home/Home';
import Login from './components/login/Login';
import PageNotFound from './components/not-found/PageNotFound';
import Register from './components/signup/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/dashboard/Dashboard';
import KanbanBoard from './components/dashboard/KanbanBoard';
import Profile from './components/dashboard/Profile';
import Reports from './components/dashboard/Reports';
import Settings from './components/dashboard/Settings';

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
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard Component={KanbanBoard} board={true} reports={false} settings={false} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Dashboard Component={Profile} board={false} reports={false} settings={false} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <Dashboard Component={Reports} board={false} reports={true} settings={false} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Dashboard Component={Settings} board={false} reports={false} settings={true} />
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
