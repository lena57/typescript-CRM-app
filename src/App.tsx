import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, Routes} from "react-router-dom";
import Clients from "./components/clients/Clients";
import Orders from "./components/orders/Orders";
import Payments from "./components/payments/Payments";
import Calls from "./components/calls/Calls";
import Home from "./components/home/Home";
import Messages from "./components/messages/Messages";

function App() {
  return (

    <div className="App">
      <nav>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/clients" className="nav-link">Clients</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">Orders</Link>
        </li>
        <li className="nav-item">
          <Link to="/payments" className="nav-link">Payments</Link>
        </li>
        <li className="nav-item">
          <Link to="/calls" className="nav-link">Calls</Link>
        </li>
          <li className="nav-item">
          <Link to="/messages" className="nav-link">Messages</Link>
        </li>
      </ul>
      </nav>
<Routes>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/calls" element={<Calls/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/" element={<Home/>}/>

</Routes>
    </div>
  );
}

export default App;
