import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

import { HomeLayout } from "./layout";
import { Home, Uploads } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/uploads' element={<Uploads />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
