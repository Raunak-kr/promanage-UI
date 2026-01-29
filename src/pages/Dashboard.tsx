// import { useDispatch } from 'react-redux';
// import { logout } from '../features/auth/authSlice';

// function Dashboard() {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <button onClick={() => dispatch(logout())}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;

import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
