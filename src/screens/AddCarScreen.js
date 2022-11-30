/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPaginate from 'react-paginate';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { getCars, deleteCar } from '../redux/actions/CarAction';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

const AddCarScreen = ({ currentItems }) => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.carList);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  // const truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str);
  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <div className="flex flex-col justify-center items-center m-auto">
      {/* add car list as card including picture without description */}
      <div className="flex flex-wrap gap-11 w-full xl:max-w-[1400px] mx-auto relative">
        {currentItems?.map((car, index) => (
          <div key={car.id}>
            <div
              className="max-h-[300px] xl:max-h-[600px] xl:max-w-[400px] max-w-[280px] mx-auto
            flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow
            "
            >
              <NavLink
                to={`${car.id}`}
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="max-h-[150px] lg:max-h-[240px]">
                  <img
                    src={car.image}
                    alt=""
                    className="lg:h-[100%] max-h-[100%]  w-full rounded-t pb-1  object-cover"
                  />
                </div>
                <div className="w-full font-bold text-xl text-gray-900 px-6">
                  {car.name}
                </div>
              </NavLink>
              <div className="p-2">
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => navigate(`/editCar/${car.id}`)}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(car.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className="mx-auto  bg-white rounded-b rounded-t-none overflow-hidden ml-[120px] mt-[40px] bottom-0 right-[150px]
          lg:mt-[90px] lg:ml-[150px]
          "
        >
          <NavLink
            to="/addCar"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <AiOutlinePlusCircle
              className="text-6xl text-purple-600 mx-auto my-10"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AddCarScreen;
