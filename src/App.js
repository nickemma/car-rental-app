import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UsersScreen from './screens/UsersScreen';

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <div className="m-auto">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/users" element={<UsersScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
