
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserManagement from './pages/UserManagement';

const App = () => {

    const isRun = useRef(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        const keycloak = new Keycloak({
            url: 'http://localhost:8180', // Keycloak server URL
            realm: 'myrealm',             // Your realm name
            clientId: 'myclient',         // Your client ID
        });
if(isRun.current) return;
    isRun.current = true;
    keycloak.init({onLoad: "login-required"}).then((res) => {setIsAuthenticated(res);});
    }, []);
    if (!isAuthenticated) {
        return <h2>Loading...</h2>;
    }
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserManagement />} />
            </Routes>
        </Router>
    );
};

export default App;
