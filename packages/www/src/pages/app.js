import React from 'react'
import { Router } from '@reach/router'
import netliftyIdentity from 'netlify-identity-widget'

let Dash = () => {
    const user = netliftyIdentity.currentUser();
  return <div>{user && user.user_metadata.full_name}</div>
};

export default (props) => {
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  )
}
