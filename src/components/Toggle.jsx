import React, { useState } from "react";

export default function Toggle() {

    const [toggle, setToggle] = useState(false);
   return (
      <>
         <button
            className="btn btn-primary"
            onClick={() => {
               setToggle((toggle) => !toggle);
            }}
         >
            Toggle
         </button>
         {toggle && <h3 className="lead">You tube</h3>}
      </>
   );
}
