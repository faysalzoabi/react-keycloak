import React, {useState, useEffect} from 'react'

function UserInfo(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

   useEffect(() => {
    props.keycloak.loadUserInfo().then(userInfo => {
        setName(userInfo.name)
        setEmail(userInfo.name)
        setId(userInfo.name)
    })
   }, [props.keycloak])

    return (
        <div className="userInfo">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default UserInfo
