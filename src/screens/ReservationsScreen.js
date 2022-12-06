/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from '../redux/actions/BookingAction';

const ReservationsScreen = () => {
  const reservation = useSelector((state) => state.userLogin.userInfo);
  // const { reservations } = reservation;

  // console.log(reservations);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteBooking(id));
    }
  };

  return (
    <div className="max-w-[1000px] m-auto">
      <h1
        className="
        text-3xl mb-4 text-center
        "
      >
        My Reservations List
      </h1>
      <div className="flex flex-row flex-wrap gap-5 md:flex-nowrap md:gap-0 md:flex-col w-full mb-12">
        {reservation?.reservations.map((info) => (
          <div
            key={info.id}
            className="flex md:flex-row md:w-full w-[310px]  flex-col items-center justify-between m-auto shadow-md rounded-lg mb-4 md:m-5 md:h-[80px] px-[10px]"
          >
            <div className="md:w-[80px] md:h-[75px] md:rounded-full p-2">
              <img
                src={info.car.image.url}
                alt={info.car.name}
                className="w-full h-full object-cover rounded-lg md:rounded-full"
              />
            </div>
            <div className="flex flex-row flex-wrap gap-12 ml-8 mt-5 mb-4  md:flex-row md:justify-between w-full  md:mx-11">
              <div className="flex flex-col justify-center md:w-[200px] ">
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
              <div className="flex flex-col justify-center">
                <h1 className="text-md font-bold">
                  {(info.car.daily_rate *
                    (new Date(info.due_date).getTime() -
                      new Date(info.reservation_date).getTime())) /
                    (1000 * 3600 * 24)}
                  ${' '}
                </h1>
                <p className="text-sm text-gray-500">Total</p>
              </div>
            </div>
            {/* add Cancle button */}
            <div className="flex flex-col justify-center mb-[1rem]">
              <button
                className="bg-gray-100 text-[#313131] px-4 py-2 rounded-lg"
                onClick={() => handleDelete(info.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationsScreen;
