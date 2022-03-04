import React, { useEffect, useState } from "react";
import {
   BrowserRouter as Router,
   Navigate,
   Route,
   Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/context";
import { publicRoutes, privateRoutes } from "./router/routes";

export default function App() {
   const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
      if(localStorage.getItem("auth")) {
         setIsAuth(true)
      }
   },[])
   return (
      <AuthContext.Provider value={{isAuth,setIsAuth}}>
         <Router>
         {isAuth ? (
            <Routes>
               <Route path="/" element={<Navbar />}>
                  {publicRoutes.map((route) => (
                     <Route path={route.path} element={route.element} />
                  ))}
               </Route>
            </Routes>
         ) : (
            <Routes>
               {privateRoutes.map((route) => (
                  <Route path={route.path} element={route.element} />
               ))}
               <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
         )}
      </Router>
      </AuthContext.Provider>

   );
}
