import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';
import CarsScreen from './screens/CarsScreen';
import DetailsCarScreen from './screens/DetailsCarScreen';

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <div className="m-auto">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/cars" element={<CarsScreen />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/editCar/:id" element={<UpdateCar />} />
          <Route path="/car/:id" element={<DetailsCarScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
