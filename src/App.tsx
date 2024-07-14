// import logo from './logo.svg';
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLogin from "./pages/login/login";
import JobList from "./pages/joblist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />,
  },
  {
    path:"/jobportal",
    element: <JobList />,
  }
]);
function App() {
  return (
  
    <RouterProvider router={router} />
  );
}

export default App;
