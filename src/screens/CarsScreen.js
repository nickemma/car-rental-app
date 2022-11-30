import React from 'react';
import PaginatedItems from '../components/PaginatedItems';

const CarsScreen = () => (
  <section className="ml-11">
    <PaginatedItems itemsPerPage={5} />
  </section>
);

export default CarsScreen;
