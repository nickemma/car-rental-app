/* eslint-disable */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import addBooking from "../redux/actions/BookingAction";


const BookingPopUp = () => {
  const [startdate, setStartDate] = useState('')
  const [enddate, setEndDate] = useState('') 
  const [carr, setCarr] = useState('')
  
  const dispatch = useDispatch()
  const car = useSelector((state) => state.carList)
  const { cars } = car
  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(startdate, enddate, carr)
    const formData = new FormData();
    formData.append('reservation[reservation_date]', startdate);
    formData.append('reservation[due_date]', enddate);
    formData.append('reservation[car_id]', carr);
    dispatch(addBooking(formData))
  }
  return (
    <div className="bg-white w-full h-full rounded-lg shadow-lg z-40">
      <div className="flex flex-col">
        <select className="w-full h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#313131] px-2"
        onChange={(e) => setCarr(e.target.value)}
        >
          {cars?.map((carss) => (
            <option key={carss.id} value={carss.id} 
            className="text-[#313131]"
            >
              {carss.name}
            </option>
          ))}
        </select>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <input
            value={startdate}
            type="date"
            className="w-full h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#313131] px-2"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <input
            value={enddate}
            type="date"
            className="w-full h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#313131] px-2"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <button className="w-full h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#313131] px-2"
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
