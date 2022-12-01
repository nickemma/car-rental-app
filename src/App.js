import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';
import CarsScreen from './screens/CarsScreen';
import DetailsCarScreen from './screens/DetailsCarScreen';
import BookingScreen from './screens/BookingScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import UserListScreen from './screens/UserListScreen';
import { getCars } from './redux/actions/CarAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <div className="App flex">
      <Navbar />
      <div className="m-auto w-[100%]">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/users" element={<UserListScreen />} />
          <Route path="/cars" element={<CarsScreen />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/editCar/:id" element={<UpdateCar />} />
          <Route path="/car/:id" element={<DetailsCarScreen />} />
          <Route path="/booking" element={<BookingScreen />} />
          <Route path="/reservations" element={<ReservationsScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
