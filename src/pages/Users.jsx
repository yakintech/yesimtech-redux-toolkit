import React, { useState } from 'react'
import { usersAdapter } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const { selectAll } = usersAdapter.getSelectors((state) => state.users)


function Users() {

    const [name, setname] = useState("")
    const [surname, setSurname] = useState("")

    const dispatch = useDispatch()
    const users = useSelector(selectAll)


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
                <button>Add User</button>
            </div>

        </div>
        <div>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name} {user.surname}</li>
                })}
            </ul>
        </div>
    </>
}

export default Users