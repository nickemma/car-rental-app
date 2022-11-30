/* eslint-disable */
import React , { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCars } from '../redux/actions/CarAction';

const DetailsCarScreen = () => {
    const { id } = useParams();
    const carDetails = useSelector((state) => state.getCars);
    const { car } = carDetails;
    const cars = car?.find((c) => c.id === parseInt(id, 10));
    const dispatch = useDispatch();
    console.log(car);
    console.log(carDetails);
    useEffect(() => {
        dispatch(getCars())
    }, [])


  return (
    <div>
      <h1>DetailsCarScreen</h1>

      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="
            text-4xl font-bold text-gray-900 mb-4
            "
        >
          {cars?.name}
        </h1>
        <p className="
            text-gray-500 text-sm
            "
        >
          {cars?.description}
        </p>
        <hr
          className="
            w-20 h-1 mt-4 bg-[#98bd2a]
            "
        />
      </div>

    </div>
  );
};

export default DetailsCarScreen;
