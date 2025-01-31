// import React, { useState, useEffect } from 'react';
//
// const UserForm = ({ onSubmit, userToEdit, onCancel }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//
//     useEffect(() => {
//         if (userToEdit) {
//             setName(userToEdit.name);
//             setEmail(userToEdit.email);
//         } else {
//             setName('');
//             setEmail('');
//         }
//     }, [userToEdit]);
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit({ name, email });
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <button type="submit">{userToEdit ? 'Update' : 'Add'} User</button>
//             {userToEdit && <button onClick={onCancel}>Cancel</button>}
//         </form>
//     );
// };
//
// export default UserForm;

import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, userToEdit, onCancel }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (userToEdit) {
            setId(userToEdit.id);
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        } else {
            setId('');
            setName('');
            setEmail('');
        }
    }, [userToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id, name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                disabled={!!userToEdit} // Disable editing ID when updating
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">{userToEdit ? 'Update' : 'Add'} User</button>
            {userToEdit && <button onClick={onCancel}>Cancel</button>}
        </form>
    );
};

export default UserForm;
