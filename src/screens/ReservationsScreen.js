/* eslint-disable */

import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ReservationsScreen = () => {
  const reservation = useSelector((state) => state.userLogin.userInfo)
  const { reservations } = reservation

  console.log(reservations)


  return (
    <div>
        <h1>Reservations</h1>
        {
          reservation.reservations?.map((info) => (
                <h1 key={info.id}>
                    {info.car.brand}
                </h1>
            ))
        }
    </div>
  )
}

export default ReservationsScreen