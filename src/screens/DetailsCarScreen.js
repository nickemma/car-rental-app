/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { getCars } from '../redux/actions/CarAction';
import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';

const DetailsCarScreen = () => {
  const { id } = useParams();
  const carDetails = useSelector((state) => state.getCars);
  const { loading, car } = carDetails;
  const cars = car?.find((c) => c.id === parseInt(id, 10));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <>
      {loading && <Loader />}
      {cars && (
        <div className="flex flex-col md:flex-row lg:flex-row grow h-full lg:pt-20 lg:pb-10">
          <div className="grow lg:w-2/5 flex items-center justify-center px-10 rounded-full aspect-square">
            <img
              src={cars?.image.url}
              alt={cars?.name}
              className="object-cover block rounded-full aspect-square w-100"
            />
          </div>
          <div className="flex flex-col w-full lg:w-72 lg:mr-20 py-10 px-10 lg:px-0">
            <h1 className="text-center lg:text-right text-3xl font-semibold text-slate-800">
              {cars?.name}
            </h1>
            <p className="mb-10 text-center lg:text-right text-gray-500 text-sm ">
              {cars?.description}
            </p>
            <div className="flex flex-col grow">
              <div className="grow flex flex-col rounded-2xl overflow-hidden border">
                <div className="flex justify-center items-center gap-4 border-b">
                  <h3 className="font-bold my-4">Other Details</h3>
                </div>
                <ul className="grow-0">
                  <li className="odd:bg-gray-200 bg-gray-100 py-2 px-4">
                    <div className="flex items-center justify-center">
                      <span>Brand</span>
                      <span className="float-right">{cars?.brand}</span>
                    </div>
                  </li>
                  <li className="odd:bg-gray-200 bg-gray-100 py-2 px-4">
                    <div className="flex items-center justify-center">
                      <span>Daily Type</span>
                      <span className="float-right">{cars?.daily_rate}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="my-10 flex justify-center">
                <button
                  type="button"
                  className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold min-w-[10rem] transition-colors border-2 border-transparent"
                >
                  <div className="flex items-center gap-3 justify-center">
                    <SlSettings />
                    <span>Reserve Now</span>
                    <BsArrowRightCircleFill />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="absolute text-[1.8rem]
                            top-1/3 left-0 z-10 bg-[#98bd2a] text-white
                            rounded-full p-3 cursor-pointer
                            hidden md:block
                            "
      >
        <BsFillArrowLeftCircleFill />
      </div>
    </>
  );
};

export default DetailsCarScreen;
