/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import pic from '../assets/canva.png';
import { AiOutlineRight } from 'react-icons/ai';
import BookingPopUp from '../components/BookingPopUp';

import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';

const DetailsCarScreen = () => {
  const [booking, setBooking] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const carDetails = useSelector((state) => state.carList);
  const { loading, cars } = carDetails;
  const carss = cars?.find((c) => c.id === parseInt(id, 10));

  return (
    <>
      {loading && <Loader />}
      {carss && (
        <div className="flex flex-col items-center md:justify-start justify-center w-full md:flex-row grow h-full lg:pt-20 lg:pb-10">
          <div className="grow  md:w-5/6 flex items-center justify-center md:px-10 rounded-full aspect-square">
            <img
              src={carss.image?.url}
              alt={carss?.name}
              className="object-cover block rounded-full m-4 aspect-square w-[100%] md:ml-[40%]"
            />
          </div>
          <div className="flex flex-col w-full items-start md:items-end  md:mr-10 py-10 px-10 lg:px-0 text-center">
            <div className="flex flex-col  items-center md:items-end">
              <h1 className="md:text-right mb-4 text-3xl font-semibold text-slate-800">
                {carss?.name}
              </h1>
              <p className=" mb-10  md:text-right text-gray-500 text-sm">
                {carss?.description}
              </p>
            </div>
            <div className="flex flex-col grow md:items-end ">
              <div className="grow flex flex-col rounded-2xl overflow-hidden border">
                <div className="flex justify-center items-center gap-4 border-b">
                  <h3 className="font-bold my-4">Other Details</h3>
                </div>
                <ul className="grow-0 p-4">
                  <li className="odd:bg-gray-200 bg-gray-100 py-2 px-4">
                    <div className="flex items-center justify-center">
                      <span className="pr-10">Brand</span>
                      <span className="text-right">{carss?.brand}</span>
                    </div>
                  </li>
                  <li className="odd:bg-gray-200 bg-gray-100 py-2 px-4">
                    <div className="flex items-center justify-center">
                      <span className="pr-10">Daily Rate</span>
                      <span className="text-right">${carss?.daily_rate}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="flex items-center gap-2 mt-1">
                DISCOVER MORE MODELS{' '}
                <AiOutlineRight className="text-yellow-500" />
              </p>
              <img src={pic} alt="canva" />
              <div className="my-6 flex justify-center">
                <button
                  type="button"
                  className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold min-w-[10rem] transition-colors border-2 border-transparent mb-4"
                  onClick={() => setBooking(true)}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <SlSettings />
                    <span>Reserve</span>
                    <BsArrowRightCircleFill />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="fixed text-[1.8rem]
                            bottom-14 left-60 z-10 bg-[#98bd2a] text-white
                            rounded-full p-3 cursor-pointer
                            hidden md:block
                            "
        onClick={() => navigate(-1)}
      >
        <BsFillArrowLeftCircleFill />
      </div>
      {booking && (
        <div
          className="fixed md:flex md:items-center md:justify-center w-full h-full 
             top-0 left-0 z-50 
            "
        >
          <BookingPopUp carId={id} onClose={() => setBooking(false)} />
          <div
            className="
                  absolute top-0 left-0 w-full h-full bg-black
                  opacity-80
                "
          />
        </div>
      )}
    </>
  );
};

export default DetailsCarScreen;
