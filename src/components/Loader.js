import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <RingLoader
      color="#36d67a"
      size={130}
    />
  </div>
);

export default Loader;
