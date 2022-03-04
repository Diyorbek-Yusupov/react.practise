import React from "react";

import TableItem from "./TableItem";
import TableHead from "./TableHead";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../style/style.css'

export default function TableList({ posts, title, remove }) {
   if (!posts.length) {
      return <p className="text-center">Not found</p>;
   }
   return (
      <>
         <p className="text-center">{title}</p>
         <table className="table table-striped">
            <TableHead />
            <tbody>
               <TransitionGroup component={null} >
                  {posts.map((post, index) => (
                     <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames={'item'}
                     >
                        <TableItem
                        post={post}
                        number={index + 1}
                        remove={remove}
                     />
                     </CSSTransition>
                  ))}
               </TransitionGroup>
            </tbody>
         </table>
      </>
   );
}
