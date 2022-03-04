import React from "react";
import classes from "./Myloader.module.css";

export default function MyLoader() {
   return (
      <div className="d-flex justify-content-center my-5">
         <div className={classes.loader}></div>
      </div>
   );
}
