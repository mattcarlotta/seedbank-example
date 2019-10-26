import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// wraps component in router config to require authentication

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      const headers = {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      };

      axios.get('/api/auth/verify', { headers: headers })
      .then(res => {
        if (res.status === 200) {
            this.setState({ loading: false });
        } else {
            this.setState({ loading: false, redirect: true });
        }
      })
      .catch(err => {
        this.setState({ loading: false, redirect: true });
      });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/auth" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}
