import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import Products from "./Products";
import Accounts from "./Accounts";
import Settings from "./Settings";

const Main = () => {

    return (
        <>
            <Header/>
            
            <Routes>
                <Route exact path="/dashboard" element={<Dashboard/>} />
                <Route path="/reports" element={<Reports/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/accounts" element={<Accounts/>} />
                <Route path="/settings" element={<Settings/>} />
            </Routes>
        </>
    )
}

export default Main;