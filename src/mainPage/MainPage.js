import React, { useEffect, useState } from "react";

import TableList from "../components/TableList";
import PostForm from "../components/PostForm";
import FilterAndSearch from "../components/FilterAndSearch";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/useCreatePost";
import PostServiceApi from "../API/PostServiceApi";
import MyLoader from "../components/UI/loader/MyLoader";
import useFetching from "../hooks/useFetching";
import { getPageArray, getPageCount } from "../utils/Page";
import MyPagination from "../components/UI/pagination/MyPagination";

export default function MainPage() {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({ sort: "", query: "" });
   const [modal, setModal] = useState(false);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const [totalPage, setTotalPage] = useState(0);
   const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query);
   const pageArray = getPageArray(totalPage);

   const [fetchPosts, isLoading, postErr] = useFetching(async () => {
      const response = await PostServiceApi.getAllPosts(limit, page);
      const totalCount = response.headers["x-total-count"];
      setPosts(response.data);
      setTotalPage(getPageCount(totalCount, limit));
   });
   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
   };
   const removePost = (post) => {
      setPosts(posts.filter((d) => d.id !== post.id));
   };

   const changePage = (page) => {
      setPage(page)
   }

   useEffect(() => {
      fetchPosts();
   }, [page]);
   return (
      <div className="app w-50 mx-auto mt-3 shadow p-3 mb-5 bg-body rounded">
         <div className=" d-flex justify-content-end">
            <button
               className="btn btn-info"
               onClick={() => {
                  setModal(true);
               }}
            >
               Add post
            </button>
         </div>
         <FilterAndSearch filter={filter} setFilter={setFilter} />
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm createPost={createPost} />
         </MyModal>
         {postErr && <p>Error occurred</p>}
         {isLoading ? (
            <MyLoader />
         ) : (
            <TableList
               remove={removePost}
               posts={sortedAndSearchPost}
               title={"Programming Languages"}
               key={""}
            />
         )}
         <MyPagination page={page} changePage={changePage} totalPage={totalPage}/>
      </div>
   );
}
