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
            <div className="navbar-nav-info">
              <div className="row">
                <button className="navbar-toggler" onClick={this.handleMobileMenuChange} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div className="row">
                <div className="navbar-nav-info-title semiBoldText col-12">Cora Lee</div>
                <div className="col-12">emerson.borer@gmail.com</div>
                <div className="col-12 navbar-nav-info-phone">(123) 555-1234</div>
                <div className="col-12"><span className="semiBoldText">Badge #: </span>101010101</div>
                <div className="col-12"><span className="semiBoldText">District #: </span>74</div>
              </div>
            </div>

            <div class="navbar-backdrop">
            </div>
          </div>
        </div>
      </nav>
		);
	}
}
