import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React,{ useState }from 'react';
import Header from './component/Header';
import Login from './component/Login';
import Sign from './component/Sign';
import { BrowserRouter ,Routes,Route, Router,useRoutes} from 'react-router-dom'

function App() {
//   function AppRoutes() {
//   const routes = useRoutes(
//     [
//       { path: '/login', element: <Login /> },
//       { path: '/Sign', element: <Sign /> }
//     ]
//   )
//   return routes;
// }
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
          {/* <Route index element={<ign />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
