import React from "react";
import Employees from "./Pages/employees/employees";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./Pages/UserDetails/UserDetails";
import Tabel from "./components/Tabel/Tabel";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Employees />}>
          <Route path="/employees" element={<Tabel />} />
          <Route path="/employee/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
