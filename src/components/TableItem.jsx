import React from "react";
import MyButton from "./UI/button/MyButton";

export default function TableItem(props) {
   return (
      <>
         <tr>
            <td>{props.post.id}</td>
            <td>{props.post.title}</td>
            <td>{props.post.body}</td>
            <td>
               <MyButton
                  className='btn btn-outline-danger form-control'
                  onClick={() => {
                     props.remove(props.post);
                  }}
               >
                  Delete
               </MyButton>
            </td>
         </tr>
      </>
   );
}
