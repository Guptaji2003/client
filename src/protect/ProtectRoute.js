import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import { useAuth } from '../Context/ShopContext';



const ProtectRoute = ({ children, role }) => {
//   const { user, token} = useAuth();

  const isAuthenticated = localStorage.getItem('token'); // Check if user is logged in
  const userrole = localStorage.getItem('user') 
  ? JSON.parse(localStorage.getItem('user')) 
  : null;


  // const userrole = JSON.parse(localStorage.getItem('user')); // Fetch user role ('user' or 'admin')
  // console.log(userrole.role);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if the role matches 'user' or 'admin'
  if (role && role !== userrole.role) {
    return <Navigate to="/unauthorized" replace />;
  }
  //

  return children;
};

export default ProtectRoute;
