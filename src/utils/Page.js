export const getPageCount = (totalPage, limit) => {
    return Math.ceil(totalPage/limit)
}

export const getPageArray = (tPage) => {
    let res = [];
   for(let i = 0; i< tPage; i++) {
    res.push(i+1)
   }
   return res
}