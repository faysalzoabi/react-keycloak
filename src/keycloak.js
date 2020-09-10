import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'react-app'
}

const keycloak = new Keycloak(keycloakConfig)
export default keycloak