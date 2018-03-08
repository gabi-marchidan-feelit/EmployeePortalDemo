import React, {Component} from 'react';
import JSONTree from 'react-json-tree';

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
    this.api2 = this.api2.bind(this);    
    this.api3 = this.api3.bind(this);    
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
              currentObject = `{ "message": "${xhr.statusText}", "status": "${xhr.status}"}`;
            }
            _this.setState({
              objectToBeautify: currentObject
            });
        };
        if (user !== null) {
          xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
        }
        xhr.send();
      });
  }

  api2() {
    const _this = this;
    mgr.getUser()
      .then(function (user) {
        const url = `${API_URL}:8080/info`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            let currentObject = xhr.responseText.toString();
            const status = xhr.status;

            if (status == 401) {
              currentObject = `{ "message": "${xhr.statusText}", "status": "${xhr.status}"}`;
            }
            _this.setState({
              objectToBeautify: currentObject
            });
        };
        if (user !== null) {
          xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
        }
        xhr.send();
      });
  }
  
  api3() {
    const _this = this;
    mgr.getUser()
      .then(function (user) {
        const url = `${API_URL}:8080/secret`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            let currentObject = xhr.responseText.toString();
            const status = xhr.status;

            if (status == 401) {
              currentObject = `{ "message": "Unauthorized", "status": "${xhr.status}"}`;
              console.log(xhr);
            }
            _this.setState({
              objectToBeautify: currentObject
            });
        };
        if (user !== null) {
          xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
        }
        xhr.send();
      });
  }

	render() {
    const {currentUser, objectToBeautify} = this.state;
    // const json = JSON.parse(objectToBeautify);
    const json = JSON.parse(objectToBeautify);
    const theme = {
      scheme: 'monokai',
      author: 'wimer hazenberg (http://www.monokai.nl)',
      base00: '#272822',
      base01: '#383830',
      base02: '#49483e',
      base03: '#75715e',
      base04: '#a59f85',
      base05: '#f8f8f2',
      base06: '#f5f4f1',
      base07: '#f9f8f5',
      base08: '#f92672',
      base09: '#fd971f',
      base0A: '#f4bf75',
      base0B: '#a6e22e',
      base0C: '#a1efe4',
      base0D: '#66d9ef',
      base0E: '#ae81ff',
      base0F: '#cc6633'
    };
		return (
			<div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.api}>Call API</button>
        <button onClick={this.api2}>Call API 2</button>
        <button onClick={this.api3}>Call API 3</button>
        <button onClick={this.logout}>Logout</button>

        <div className="current-user">
          You are currently logged in with SID: {currentUser}
        </div>
        <div className="json-display">
          <JSONTree data={json} theme={theme} invertTheme={false} />
        </div>
      </div>
		);
	}
}