/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { getPageArray } from '../../../utils/Page';

export default function MyPagination({totalPage,page,changePage}) {
    const pageArray = getPageArray(totalPage)
    return (
        <ul className="pagination">
            {pageArray.map((item) => (
               <li className={item===page? "page-item active" : "page-item"} key={item}>
                  <a
                     className="page-link"
                     onClick={() => {
                        changePage(item);
                     }}
                  >
                     {item}
                  </a>
               </li>
            ))}
         </ul>
    )
}
