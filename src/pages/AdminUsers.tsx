import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import {
  fetchUsers,
  toggleUserActive,
} from '../features/users/usersSlice';
import type { User } from '../features/users/usersSlice';

import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { TextField } from '@mui/material';

function AdminUsers() {
  const dispatch = useDispatch<AppDispatch>();

  const { list, loading } = useSelector(
    (state: RootState) => state.users
  );

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // 🔹 Open modal
  const handleOpen = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  // 🔹 Close modal
  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  // 🔹 Grid columns
  const columns: GridColDef<User>[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      sortable: true,
      renderCell: (params) => (
        <span
          style={{
            color: '#1976d2',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() => handleOpen(params.row)}
        >
          {params.row.firstName} {params.row.lastName}
        </span>
      ),
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      sortable: true,
    },
    {
      field: 'isActive',
      headerName: 'Active',
      flex: 0.5,
      sortable: true,
      renderCell: (params) => {
        const isActive = params.row.isActive;

        return (
          <span
            style={{
              color: isActive ? 'green' : 'red',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={() =>
              dispatch(toggleUserActive(params.row.id))
            }
          >
            {isActive ? 'Yes' : 'No'}
          </span>
        );
      },
    },
  ];

  return (
    <>
      {/* USERS GRID */}
      <Box sx={{ height: 450, width: '70%', mx: 'auto', mt: 4 }}>
        <DataGrid
          rows={list}
          columns={columns}
          getRowId={(row) => row.id}
          loading={loading}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          disableRowSelectionOnClick
        />
      </Box>

      {/* USER DETAILS MODAL */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>User Details</DialogTitle>

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 1,
          }}
        >
          <TextField
            label="First Name"
            value={selectedUser?.firstName || ''}
            onChange={(e) =>
              setSelectedUser((prev) =>
                prev
                  ? {
                      ...prev,
                      firstName: e.target.value,
                    }
                  : prev
              )
            }
          />

          <TextField
            label="Last Name"
            value={selectedUser?.lastName || ''}
            onChange={(e) =>
              setSelectedUser((prev) =>
                prev
                  ? {
                      ...prev,
                      lastName: e.target.value,
                    }
                  : prev
              )
            }
          />

          <TextField
            label="Email"
            value={selectedUser?.email || ''}
            disabled
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Button variant="contained">Update</Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdminUsers;






// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from '../app/store';
// import {
//   fetchUsers,
//   toggleUserActive,
// } from '../features/users/usersSlice';
// import type { User } from '../features/users/usersSlice';

// function AdminUsers() {
//   const dispatch = useDispatch<AppDispatch>();

//   const usersState = useSelector<
//     RootState,
//     RootState['users']
//   >((state) => state.users);

//   const { list, loading, error } = usersState;

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Users</h2>

//       {list.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         <table border={1} cellPadding={8}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Active</th>
//             </tr>
//           </thead>

//           <tbody>
//             {list.map((user: User) => (
//               <tr key={user.id}>
//                 <td>
//                   <span
//                     style={{
//                       color: '#1976d2',
//                       cursor: 'pointer',
//                       textDecoration: 'underline',
//                     }}
//                   >
//                     {user.firstName} {user.lastName}
//                   </span>
//                 </td>

//                 <td>{user.email}</td>

//                 <td>
//                   <span
//                     style={{
//                       color: user.isActive ? 'green' : 'red',
//                       cursor: 'pointer',
//                       fontWeight: 'bold',
//                     }}
//                     onClick={() =>
//                       dispatch(toggleUserActive(user.id))
//                     }
//                   >
//                     {user.isActive ? 'Yes' : 'No'}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default AdminUsers;
