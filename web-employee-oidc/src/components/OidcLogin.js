import React, {Component} from 'react';
import JSONTree from 'react-json-tree'

const API_URL = 'http://localhost';

const config = {
      authority: `${API_URL}:5000`,
      client_id: "js",
      redirect_uri: `${API_URL}:3000/callback`,
      response_type: "id_token token",
      scope:"openid profile api1",
      post_logout_redirect_uri : `${API_URL}:3000/`,
  };
const mgr = new Oidc.UserManager(config);

export default class OidcLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: 'You are not logged in',
      objectToBeautify: '{ "message":"Click on Call API button to see the results"}'
    };
    
    this.login = this.login.bind(this);    
    this.logout = this.logout.bind(this);    
    this.api = this.api.bind(this);    
  }

  componentWillMount() {
    const _this = this; 
    mgr.getUser().then(function (user) {
      if (user) {
        _this.setState({
          currentUser: user.profile.sid,
        });
      }
      else {
        _this.setState({
          currentUser: 'You are not logged in',
        });
      }
  });
  }

  login() {
    mgr.signinRedirect();
  }
  
  logout() {
    mgr.signoutRedirect();
  }

  api() {
    const _this = this;
    mgr.getUser()
      .then(function (user) {
        const url = `${API_URL}:5001/identity`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            let currentObject = xhr.responseText.toString();
            const status = xhr.status;

            if (status == 401) {
              currentObject = `{ "message": "${xhr.statusText}", "status": "${xhr.status}"}`
            }
            debugger;
            _this.setState({
              objectToBeautify: currentObject
            });
        };
        xhr.setRequestHeader("Authorization", "Bearer " + (user !== null ? user.access_token : ''));
        xhr.send();
      });
  }

	render() {
    const {currentUser, objectToBeautify} = this.state;
    // const json = JSON.parse(objectToBeautify);
    const json = JSON.parse(objectToBeautify);
		return (
			<div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.api}>Call API</button>
        <button onClick={this.logout}>Logout</button>

        <div className="current-user">
          You are currently logged in with SID: {currentUser}
        </div>
        <div className="json-display">
          <JSONTree data={json} />
        </div>
      </div>
		);
	}
}