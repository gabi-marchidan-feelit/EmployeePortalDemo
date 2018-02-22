import React, {Component} from 'react';

export default class OidcCallback extends Component {
	constructor(props){
    super(props);
  }
  
  componentWillMount(){
    const _props = this.props;
    new Oidc.UserManager().signinRedirectCallback()
      .then(function () {
        // window.location = "index.html";
        _props.history.push("/");
      }).catch(function () {
        // console.error(e);
      });
  }

  render() {
    return (
      <div>Please wait while we are checking your request</div>
    );
  }	
}