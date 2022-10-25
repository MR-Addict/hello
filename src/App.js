import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeLayout } from "./layout";
import { Home, Submits } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/submits' element={<Submits />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
