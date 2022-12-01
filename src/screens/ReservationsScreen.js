/* eslint-disable */

import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ReservationsScreen = () => {
  const reservation = useSelector((state) => state.userLogin)
  const { userInfo } = reservation

  console.log(userInfo)


  return (
    <div>
        <h1>Reservations</h1>
        {
            userInfo.reservations?.map((info) => (
                <h1 key={info.id}>
                    {info.car.brand}
                </h1>
            ))
        }
    </div>
  )
}

export default ReservationsScreen