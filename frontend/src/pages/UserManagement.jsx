// import React, { useState, useEffect } from 'react';
// import UserForm from '../components/UserForm';
// import UserList from '../components/UserList';
// import { getAllUsers, createUser, updateUserById, deleteUserById } from '../services/api';
//
// const UserManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [userToEdit, setUserToEdit] = useState(null);
//
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const allUsers = await getAllUsers();
//                 setUsers(allUsers);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//
//         fetchUsers();
//     }, []);
//
//     const addUser = async (user) => {
//         const newUser = await createUser(user);
//         setUsers((prev) => [...prev, newUser]);
//     };
//
//     const updateUser = async (user) => {
//         const updatedUser = await updateUserById(userToEdit.id, user);
//         setUsers((prev) =>
//             prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
//         );
//         setUserToEdit(null);
//     };
//
//     const deleteUser = async (id) => {
//         await deleteUserById(id);
//         setUsers((prev) => prev.filter((user) => user.id !== id));
//     };
//
//     return (
//         <div>
//             <h2>User Management</h2>
//             <UserForm
//                 onSubmit={userToEdit ? updateUser : addUser}
//                 userToEdit={userToEdit}
//                 onCancel={() => setUserToEdit(null)}
//             />
//             <UserList
//                 users={users}
//                 onDelete={deleteUser}
//                 onEdit={setUserToEdit}
//             />
//         </div>
//     );
// };
//
// export default UserManagement;


import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { getAllUsers, createUser, updateUserById, deleteUserById } from '../services/api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allUsers = await getAllUsers();
                setUsers(allUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const addUser = async (user) => {
        if (users.find((u) => u.id === user.id)) {
            alert("ID already exists! Please use a unique ID.");
            return;
        }
        const newUser = await createUser(user);
        setUsers((prev) => [...prev, newUser]);
    };

    const updateUser = async (user) => {
        const updatedUser = await updateUserById(userToEdit.id, user);
        setUsers((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        setUserToEdit(null);
    };

    const deleteUser = async (id) => {
        await deleteUserById(id);
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    return (
        <div>
            <h2>User Management</h2>
            <UserForm
                onSubmit={userToEdit ? updateUser : addUser}
                userToEdit={userToEdit}
                onCancel={() => setUserToEdit(null)}
            />
            <UserList
                users={users}
                onDelete={deleteUser}
                onEdit={setUserToEdit}
            />
        </div>
    );
};

export default UserManagement;
