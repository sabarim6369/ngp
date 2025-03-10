import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from "./components/login/login";
import Signup from './components/signup/Signup';
import SuperAdminDashboard from './components/dashboard/superadmindashboard';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
      </Routes>
    </Router>
  );
}
