import React from 'react';
import Home from './components/home/Home';
import PageNotFound from './components/not-found/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import KanbanBoard from './components/dashboard/KanbanBoard';

const Login = React.lazy(() => import('./components/login/Login'));
const Register = React.lazy(() => import('./components/signup/Register'));
const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Profile = React.lazy(() => import('./components/dashboard/Profile'));
const Reports = React.lazy(() => import('./components/dashboard/Reports'));
const Settings = React.lazy(() => import('./components/dashboard/Settings'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<></>}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <React.Suspense fallback={<></>}>
                  <Register />
                </React.Suspense>
              }
            />
            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <Dashboard Component={KanbanBoard} board={true} reports={false} settings={false} />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <Dashboard Component={Profile} board={false} reports={false} settings={false} />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/reports"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <Dashboard Component={Reports} board={false} reports={true} settings={false} />
                  </ProtectedRoute>
                </React.Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <React.Suspense fallback={<></>}>
                  <ProtectedRoute>
                    <Dashboard Component={Settings} board={false} reports={false} settings={true} />
                  </ProtectedRoute>
                </React.Suspense>
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
