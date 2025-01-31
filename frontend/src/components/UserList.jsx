// import React from 'react';
//
// const UserList = ({ users, onDelete, onEdit }) => {
//     return (
//         <ul>
//             {users.map((user) => (
//                 <li key={user.id}>
//                     <p>{user.name}</p>
//                     <p>{user.email}</p>
//                     <button onClick={() => onEdit(user)}>Edit</button>
//                     <button onClick={() => onDelete(user.id)}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     );
// };
//
// export default UserList;


import React from 'react';

const UserList = ({ users, onDelete, onEdit }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={() => onEdit(user)}>Edit</button>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
