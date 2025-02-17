import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { getAllUsers, createUser, updateUserById, deleteUserById, searchUsers } from '../services/api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);
    const [searchKey, setSearchKey] = useState('');
    const [searchValue, setSearchValue] = useState('');

    // Fetch all users on component mount
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

    // Add a new user
    const addUser = async (user) => {
        if (users.find((u) => u.id === user.id)) {
            alert("ID already exists! Please use a unique ID.");
            return;
        }

        const newUser = await createUser(user);
        setUsers((prev) => [...prev, newUser]);
    };

    // Update an existing user
    const updateUser = async (user) => {
        const updatedUser = await updateUserById(userToEdit.id, user);
        setUsers((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        setUserToEdit(null);
    };

    // Delete a user by ID
    const deleteUser = async (id) => {
        await deleteUserById(id);
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    // Handle search based on field and value
    const handleSearch = async () => {
        if (!searchKey || !searchValue) {
            alert("Please provide both search key and value.");
            return;
        }

        try {
            const results = await searchUsers(searchKey, searchValue);
            console.log("Search results:", results);
            setUsers(results);  // Update the user list with search results
        } catch (error) {
            console.error("Error during search:", error);
            alert("An error occurred while searching. Please try again.");
        }
    };

    return (
        <div>
            <h2>User Management</h2>

            {/* Search Form */}
            <div>
                <input
                    type="text"
                    placeholder="Enter Key (e.g., id or name)"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Value to Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {/* User Form for Add/Edit */}
            <UserForm
                onSubmit={userToEdit ? updateUser : addUser}
                userToEdit={userToEdit}
                onCancel={() => setUserToEdit(null)}
            />

            {/* User List for displaying all users */}
            <UserList
                users={users}
                onDelete={deleteUser}
                onEdit={setUserToEdit}
            />
        </div>
    );
};

export default UserManagement;
