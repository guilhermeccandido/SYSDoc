import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';

const keycloak = new Keycloak({
  url: 'https://seu-keycloak-url/auth',
  realm: 'seu-realm',
  clientId: 'seu-cliente-id',
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      setIsAuthenticated(authenticated);
      setKeycloakInitialized(true);
    });
  }, []);

  const handleLogout = () => {
    keycloak.logout();
    setIsAuthenticated(false);
  };

  if (!keycloakInitialized) {
    return <div>Carregando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} 
        />

        <Route 
          path="/main" 
          element={isAuthenticated ? <MainPage onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/admin" 
          element={isAuthenticated ? <AdminPage onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />

        <Route 
          path="*" 
          element={<Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
