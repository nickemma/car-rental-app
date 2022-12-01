/* eslint-disable */

import React from "react";
import { BsCalendar2WeekFill } from "react-icons/bs";
import image from "../assets/carback.jpg";

const BookingScreen = () => {
  return (
    <section className="relative w-[100%] h-[100vh]  overflow-hidden">
      <div className="absolute z-[-1]">
        <img
          src={image}
          alt="back"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#3a6608] opacity-70 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-[100%] h-[100vh]">
        <div className="flex flex-col items-center justify-center h-[100vh]">
          <p className="max-w-[1000px] leading-[3rem] text-white font-semibold text-[21px]">
            Thank you for being interested in renting one of our exclusive
            vehicles that we have for you at EXO Cars, it is important to
            consider the following before continuing with your reservation:
            <br />
            It is essential to have a valid driver's license at all times of the
            rental, if you are a foreigner you must have a valid international
            driver's license.
            <br />
            For any rental you must make the reservation at least 48 hours in
            advance.
            <br />
            For any cancellation you can contact us and learn about our
            cancellation policies.
          </p>
          <button className="flex  items-center bg-[#313131] text-white px-10 py-3 mt-10 rounded-lg z-10 hover:bg-white">
            <BsCalendar2WeekFill />{" "}
            <span className="ml-2 font-semibold text-[18px]">Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingScreen;
