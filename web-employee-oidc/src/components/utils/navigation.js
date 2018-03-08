import React, {Component} from 'react';
import logo from '../../styles/images/logo.png';

export default class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {
      mobileCollapse: 'hide'
    };

    this.handleMobileMenuChange = this.handleMobileMenuChange.bind(this);
  }
  handleMobileMenuChange(){
    const {mobileCollapse} = this.state;

    this.setState({
      mobileCollapse: mobileCollapse === 'show' ? 'hide' : 'show'
    });
  }
	render(){
    const {mobileCollapse} = this.state;

		return(
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-faded">
        <button className="navbar-toggler" onClick={this.handleMobileMenuChange} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="logo"/>
        </a>
        <div className={`collapse navbar-collapse ${mobileCollapse}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>
		);
	}
}