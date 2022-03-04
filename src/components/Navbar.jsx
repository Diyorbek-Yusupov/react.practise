import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/context";

export default function Navbar() {
   const { setIsAuth } = useContext(AuthContext);
   const logOut = () => {
      setIsAuth(false);
      localStorage.removeItem("auth")
   }
   return (
      <>
         <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
               <a
                  href="/"
                  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
               >
                  <svg className="bi me-2" width="40" height="32">
                     <use xlinkHref="#bootstrap"></use>
                  </svg>
                  <span className="fs-4">Diyorbek</span>
               </a>

               <ul className="nav nav-pills">
                  <li className="nav-item">
                     <Link to="/posts" className="nav-link">
                        Posts
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/game" className="nav-link">
                        Game
                     </Link>
                  </li>
                  <button
                  className="btn btn-primary"
                  onClick={logOut}
                  >
                     LogOut
                  </button>
               </ul>
            </header>
         </div>
         <Outlet />
      </>
   );
}
