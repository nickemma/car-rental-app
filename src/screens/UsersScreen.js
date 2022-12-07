import React from 'react';
import PaginatedUsers from '../components/PaginatedUsers';

const UsersScreen = () => (
  <div>
    <PaginatedUsers itemsPerPage={8} />
  </div>
);

export default UsersScreen;
