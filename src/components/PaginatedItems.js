/* eslint-disable */

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import AddCarScreen from '../screens/AddCarScreen';
import Loader from './Loader';

function PaginatedItems({ itemsPerPage }) {
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;
  const admin = userInfo?.admin;
  if (!admin) {
    return <h1>NOt found</h1>;
  }
  const [itemOffset, setItemOffset] = useState(0);

  const carList = useSelector((state) => state.carList);
  const { loading, cars } = carList;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cars?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cars?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cars?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {loading && <Loader />}

      <AddCarScreen currentItems={currentItems} />
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

export default PaginatedItems;
