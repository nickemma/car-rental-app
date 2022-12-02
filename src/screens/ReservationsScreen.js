/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReservationsScreen = () => {
  const reservation = useSelector((state) => state.userLogin.userInfo);
  const { reservations } = reservation;
  console.log(reservations);
  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations?.map((info) => (
          <li key={info.id}>
            <img src={info.car?.image?.url} alt="" />
            <div>
              <h2>{info.car.brand}</h2>
            </div>
            <h2>{info.due_date}</h2>
            <h2>{info.reservation_date}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationsScreen;
