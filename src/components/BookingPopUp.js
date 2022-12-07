/* eslint-disable */

import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking } from '../redux/actions/BookingAction';

const BookingPopUp = ({ onClose, carId }) => {
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [carr, setCarr] = useState(carId);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.carList);
  const { cars } = car;

  const carss = cars?.find((c) => c.id === parseInt(carId, 10));
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('reservation[reservation_date]', startdate);
    formData.append('reservation[due_date]', enddate);
    formData.append('reservation[car_id]', carr);
    dispatch(addBooking(formData));
    onClose();
    navigate('/reservations');
  };
  return (
    <div className="bg-white relative md:w-[500px] md:h-[400px] rounded-lg shadow-lg z-40">
      {/* add close Icon from react icons */}
      <div
        className="
        absolute  right-8
      "
        onClick={() => onClose(true)}
      >
        <AiOutlineCloseSquare className="text-3xl text-gray-400 cursor-pointer mt-5" />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 p-9 mt-16">
        {!carId ? (
          <select
            className="w-full h-10 rounded-lg bg-gray-50 border-gray-300 focus:outline-none px-2"
            onChange={(e) => setCarr(e.target.value)}
          >
            <option>select</option>
            {cars?.map((carss) => (
              <option
                key={carss.id}
                value={carss.id}
                className="text-[#313131]"
              >
                {carss.name}
              </option>
            ))}
          </select>
        ) : (
          <div className="w-full h-10 rounded-lg bg-gray-50 border-gray-300 focus:outline-none px-2 mt-5">
            <p className="text-[#313131]">{carss?.name}</p>
          </div>
        )}

        <div className="flex flex-col items-center justify-center w-full h-full">
          <input
            value={startdate}
            type="date"
            className="w-full h-10 rounded-lg bg-gray-50  focus:outline-none px-2"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <input
            value={enddate}
            type="date"
            className="w-full h-10 rounded-lg bg-gray-50  focus:outline-none px-2"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <button
            className="rounded-lg bg-[#313131] text-white font-semibold py-2 px-4 focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPopUp;
