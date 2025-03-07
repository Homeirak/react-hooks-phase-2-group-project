//App.js
import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import About from "./About";
import Animals from "./Animals";
import Layout from "./Layout"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
      <Route index element={<Animals />} /> 
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;