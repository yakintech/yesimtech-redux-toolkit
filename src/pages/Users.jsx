import React, { useState } from 'react'
import { selectAllUsers, userAdded, userRemoved, usersAdapter } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'




function Users() {

    const [name, setname] = useState("")
    const [surname, setSurname] = useState("")

     const dispatch = useDispatch()
     const users = useSelector(selectAllUsers)


     const add = () => {
            dispatch(userAdded({ id: users.length + 1, name, surname }))
            setname("")
            setSurname("")
        }


    return <>
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Surname</label>
                <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add User</button>
            </div>

        </div>
        <div>
            <ul>
                {users.map((user) => {
                    return <>
                        <li key={user.id}>{user.name} {user.surname}</li>
                        <button onClick={() => dispatch(userRemoved(user.id))}>Remove</button>
                    </>
                })}
            </ul>
        </div>
    </>
}

export default Users