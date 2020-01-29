import React, { Component } from 'react';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   <Route {...rest} render={(props) => (
            fakeAuth.isAuthenticated === true
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />);
    }
}
 
export default PrivateRoute;