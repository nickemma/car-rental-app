/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getCars, deleteCar } from '../redux/actions/CarAction';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

const AddCarScreen = () => {
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
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => navigate('/addCar')}
        className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-[4rem]"
      >
        + Add Car
      </button>
      {/* add car list as card including picture without description */}
      <Swiper
        slidesPerView={3}
        centeredSlides
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation
        virtual
        className="max-w-[900px] lg:max-w-[1400px] mx-auto absolute"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={car.id} virtualIndex={index}>
            <div className="max-h-[400px] lg:max-h-[600px] lg:max-w-[400px]
            flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow
            "
            >
              <NavLink to={`${car.id}`} className="flex flex-wrap no-underline hover:no-underline">
                <div className="max-h-[150px] lg:max-h-[250px]">
                  <img
                    src={car.image
                      ? car.image
                      : 'https://images.unsplash.com/photo-1517436073-3b1b7b7f8f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    alt=""
                    className="h-[100%]  w-full rounded-t pb-1  object-cover"
                  />
                </div>
                <div className="w-full font-bold text-xl text-gray-900 px-6">{car.name}</div>
              </NavLink>
              <div className="p-6">
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => navigate(`/editCar/${car.id}`)}
                    className="mx-auto lg:mx-0 hover:underline bg-gray-600 text-white font-bold rounded-[8px] my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-[16px]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(car.id)}
                    className="mx-auto lg:mx-0 hover:underline bg-red-600 text-white font-bold rounded-[8px] my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-[16px]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AddCarScreen;
