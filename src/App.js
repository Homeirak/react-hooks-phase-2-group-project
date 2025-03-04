import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./Pages/About";

const router = createBrowserRouter([
  {path: "/about", element: <About /> }
  {path: "/about", element: <PlanAVisit}
  {path: "/about", element: <ViewTheAnimals}
]);


function App() {


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


//RoterProvider is a component
