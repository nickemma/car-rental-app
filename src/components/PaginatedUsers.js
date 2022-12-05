/* eslint-disable */

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, getUsers, updateUser } from '../redux/actions/UserAction';
import UserListScreen from '../screens/UserListScreen';
import Loader from './Loader';

function PaginatedUsers({ itemsPerPage }) {
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;
  const adminn = userInfo?.admin;
  if (!adminn) {
    return <h1>NOt found</h1>;
  }

  const [itemOffset, setItemOffset] = useState(0);

  const usersLists = useSelector((state) => state.usersList);
  const { loading, usersList } = usersLists;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id));
    }
  };


  const updateHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(updateUser(id));
      console.log(id);
    }
  };


  const items = usersList;
  const currentItems = items?.slice(itemOffset, itemOffset + itemsPerPage);

  const pageCount = Math.ceil(items?.length / itemsPerPage);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setItemOffset(selectedPage * itemsPerPage);
  };

  return (
    <>
      {loading && <Loader />}

      <UserListScreen
        currentItems={currentItems}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        //add paginagtion css
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}

export default PaginatedUsers;
