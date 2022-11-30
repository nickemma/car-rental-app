/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../redux/actions/CarAction';

const AddCar = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [dailyrate, setDailyrate] = useState('');
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();

  const Navigate = useNavigate();
  useEffect(() => {
    if (name && image && type && description && brand && dailyrate) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, image, type, description, brand, dailyrate]);

  // handle upload multiple images
  const handleUploadImage = (e) => {
    const { files } = e.target;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImage(fileArray);
    Array.from(files).map((file) => URL.revokeObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const car = JSON.stringify({
      car: {
        name,
        description,
        brand,
        daily_rate: dailyrate,
        car_type: type,
      },
    });
    const formData = new FormData();
    formData.append('car', car);
    for (let i = 0; i < image.length; i += 1) {
      formData.append('images', image[i]);
    }
    dispatch(addCar(formData));
    Navigate('/cars');
  };
  return (
    <>
      {/* add from using tailwindcss */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="image"
              type="file"
              placeholder="Image"
              onChange={handleUploadImage}
              multiple={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="type"
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  resize-none focus:outline-none focus:bg-white"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="brand"
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="daily_rate"
            >
              Daily Rate
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="daily_rate"
              type="text"
              placeholder="Daily Rate"
              value={dailyrate}
              onChange={(e) => setDailyrate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Car
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCar;
