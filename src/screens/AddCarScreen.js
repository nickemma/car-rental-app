/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCars, deleteCar } from '../redux/actions/CarAction';

const AddCarScreen = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.carList);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  const truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str);
  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <>
      <button
        type="button"
        onClick={() => navigate('/addCar')}
        className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        + Add Car
      </button>
      <h1>Car List</h1>
      {/* add car list as card including picture without description */}
      <div className="flex flex-wrap">
        {cars.map((car) => (
          <div key={car.id} className="w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img
                  src={car.image
                    ? car.image
                    : 'https://images.unsplash.com/photo-1517436073-3b1b7b7f8f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                  alt=""
                  className="h-[40%] w-full rounded-t pb-6"
                />
                <div className="w-full font-bold text-xl text-gray-900 px-6">{car.name}</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">{truncate(car.description, 50)}</p>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  {car.brand}
                  {' '}
                  -
                  {' '}
                  {car.car_type}
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => navigate(`/editCar/${car.id}`)}
                  className="mx-auto lg:mx-0 hover:underline bg-purple-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(car.id)}
                  className="mx-auto lg:mx-0 hover:underline bg-red-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddCarScreen;
