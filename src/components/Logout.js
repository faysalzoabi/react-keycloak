import React from 'react'
import { useHistory } from "react-router-dom";

function Logout(props) {

    let history = useHistory();

    function logout() {
        history.push('/')
        props.keycloak.logout()
    }

    return (
        <div>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )
}

export default Logout
