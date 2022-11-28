import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars, deleteCar } from '../redux/actions/CarAction';

const AddCarScreen = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.carList);
  // const { loading, error, cars } = Cars;

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <>
      <h1>Car List</h1>
      <ul className="nice">
        {cars &&
          cars.map((car) => (
            <li key={car.id}>
              <div className="image">
                <figure>
                  <img src={car.image} alt="car" />
                </figure>
              </div>
              <h3>{car.name}</h3>
              <div className="btn">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-red-400 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => handleDelete(car.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default AddCarScreen;
