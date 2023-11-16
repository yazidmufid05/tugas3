import React from 'react';
// TODO - 2
// Import variabel users dari file users.js
import users from './users';

const UsersController = () => {
    const fetchData = async () => {
        console.log(await formatUser(users));
        console.log(await findByName(users, 'Erik'));
        console.log(await filterByMajor(users, 'Web'));
    };

    fetchData();

    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async (dataUsers) => {
    return dataUsers.map(user => user.name);
}

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (dataUsers, name) => {
    return dataUsers.find(user => user.name === name);
}

// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (dataUsers, major) => {
    return dataUsers.filter(user => user.major === major);
}

export default UsersController;
