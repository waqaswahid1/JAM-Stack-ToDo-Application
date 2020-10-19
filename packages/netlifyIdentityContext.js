const React, { useEffect, useState } = require('react')

const  netliftyIdentity = require('netlify-identity-widget')

const IdentityContext = React.createContext({});

exports.IdentityContext = IdentityContext;

const IdentityProvider = props => {
    const [user, setUser] = useState()

  useEffect(() => {
    netlifyIdentity.init({})
  })

  netlifyIdentity.on('login', (user) => {
    netlifyIdentity.close()
    setUser(user)
  })

  netlifyIdentity.on('logout', () => {
    netlifyIdentity.close()
    setUser()
  })

    return (
        <IdentityContext.Provider  value={{identity: netliftyIdentity, user: undefined}} >
            {props.children}
        </IdentityContext.Provider>

    )
}

exports.Provider = IdentityProvider;