/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from '../redux/actions/BookingAction'

const ReservationsScreen = () => {
  const reservation = useSelector((state) => state.userLogin.userInfo);
  const { reservations } = reservation;

  console.log(reservations);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteBooking(id));
    }
  };

  return (
    <div className="max-w-[1000px] m-auto">
      <h1
        className="
        text-3xl mb-4
        "
      >
        Reservations
      </h1>
      {reservation.reservations?.map((info) => (
        <div className="flex items-center justify-between m-auto shadow-md rounded-lg mb-4  h-[80px] p-2">
          <div className="w-[80px] h-[75px] rounded-full p-2">
            <img
              src={info.car.image.url}
              alt={info.car.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center w-[200px]">
            <h1 className="text-md font-bold">{info.car.name}</h1>
            <p className="text-sm text-gray-500">{info.car.brand}</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500">Start date</p>
            <h1 className="text-md font-bold">{info.reservation_date}</h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500">End date</p>
            <h1 className="text-md font-bold">{info.due_date}</h1>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-md font-bold">{info.car.daily_rate}€</h1>
            <p className="text-sm text-gray-500">/day</p>
          </div>
          {/* add Cancle button */}
          <div className="flex flex-col justify-center">
            <button className="bg-gray-100 text-[#313131] px-4 py-2 rounded-lg"
            onClick={() => handleDelete(info.id)}
            >
              Cancle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationsScreen;
