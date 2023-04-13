import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Merch from './pages/Merch';
import Crowley from './pages/Crowley';
import Lilith from './pages/Lilith';
import Calendar from './pages/Calendar';
import Layout from "./pages/Layout/Layout";

function App() {
  return (
      <Layout>
        <Router>
          <div className="container">
            <Routes>
              <Route
              exact path="/"
              element={<Home />}
              />
              <Route
              exact path="/merch"
              element={<Merch />}
              />
              <Route
              exact path="/crowley"
              element={<Crowley />}
              />
              <Route
              exact path="/lilith"
              element={<Lilith />}
              />
              <Route
              exact path="/calendar"
              element={<Calendar />}
              />
            </Routes>
          </div>
        </Router>
      </Layout>
  )
}


export default App;
