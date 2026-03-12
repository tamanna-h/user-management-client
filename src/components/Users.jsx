import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);

    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);
    }
    
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input name='name' type="text" />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" value="Add User"/>
            </form>

            <div>
                {users.map(user => <div key={user.id}>{user.name} : {user.email}</div>)}
            </div> 
        </div>
    );
};

export default Users;