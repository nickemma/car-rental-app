import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
import AddCarScreen from './screens/AddCarScreen';
import AddCar from './components/AddCar';

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <div className="m-auto">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} /> */}
          <Route path="/cars" element={<AddCarScreen />} />
          <Route path="/addCar" element={<AddCar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
