import React, {useState, useEffect} from 'react'
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';

function Secured() {
    const [keycloak, setKeycloak] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const keycloakjson = Keycloak('/keycloak.json');
        keycloakjson.init({onLoad: 'login-required'}).then(authenticate => {
            setKeycloak(keycloakjson);
            setAuthenticated(authenticate)
        })
    }, [])

    if(keycloak) {
        if(authenticated) {
            return (
                <div>
                    <p>This is a Keycloak-secured component of your application. You shouldn't be able
                    to see this unless you've authenticated with Keycloak.</p>

                <UserInfo keycloak={keycloak}/>
                <Logout keycloak={keycloak}/>
                </div>
            );
        } else {
            return (<div>Unable to authenticate!</div>)
        }
    }

    return (
        <div>
            Initializing Keycloak...
        </div>
    )
}

export default Secured
