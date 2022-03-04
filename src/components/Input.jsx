import React, { useState } from "react";

export default function Input() {
   const [value, setValue] = useState("DY");
   return (
      <>
         <p>Value {value}</p>
         <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) => {
               setValue(e.target.value);
            }}
         />
      </>
   );
}
