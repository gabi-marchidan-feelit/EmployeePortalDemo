import React, {Component} from 'react';

export default class EventDetailsConfirmed extends Component {
  constructor(props) {
    super(props);
    this.handleModalConfirmedClose = this.handleModalConfirmedClose.bind(this);
  }
  handleModalConfirmedClose() {
    this.props.modalConfirmedCloseFromChild();
  }
  render() {
    return(
      <div>
        <div id="modal1" className={`modal fade animation-rightToLeft fullPageModal backPageModal ${this.props.showModalConfirmed === true ? 'show' : ''}`}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <button className="btn-rgis-transparent text-white eventDetails-backButton" onClick={this.props.modalConfirmedCloseFromChild}><i className="fas fa-arrow-left" /></button>
                  10/7 PetCo AQ1
                </h5>
              </div>
              <div className="eventDetails-tabs row noMargin text-center text-white">
                  <div className="col boldText active">
                    STORE INFO
                  </div>
                  <div className="col boldText">
                    TEAM MEMBERS
                  </div>
                </div>
              <div className="modal-body eventDetails-content">
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-map-marker text-red" />
                  </div>
                  <div className="col">
                    <p className="boldText title">PetCo AQ1</p>
                    <p><span className="boldText">Store #:</span> 1986</p>
                    <p className="text-red underLine">9237 Jerrold Freeway</p>
                    <p className="text-red underLine">Gussieton, IL 60606</p>
                    <p className="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-user text-red" />
                  </div>
                  <div className="col">
                    <p><span className="boldText">Supervisor: </span>Ryan Reiss</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-tv text-red" />
                  </div>
                  <div className="col">
                    <p><span className="boldText">Authorization#: </span>P1234567890</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="far fa-clock text-red" />
                  </div>
                  <div className="col">
                    <p><span className="boldText">Meet Site:</span></p>
                    <p className="text-red underLine">9237 Jerrold Freeway</p>
                    <p className="text-red underLine">Gussieton, IL 60606</p>
                    <p><span className="boldText">Meet Time: </span>7:00 PM</p>
                    <p><span className="boldText">Start Time: </span>7:00 PM</p>
                    <p><span className="boldText">Estimated Duration: </span>5 Hours</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col">
                      <p><span className="boldText">Your ASET Targets:</span></p>
                      <div className="range">
                        <span>A</span>
                        <div className="rangeBar rangeBar-sm">
                          <div className="rangeCircle" />
                        </div>
                        <span>250 APH</span>
                      </div>
                      <div className="range range-active">
                        <span>S</span>
                        <div className="rangeBar rangeBar-md">
                          <div className="rangeCircle" />
                        </div>
                        <span>500 APH</span>
                      </div>
                      <div className="range">
                        <span>E</span>
                        <div className="rangeBar rangeBar-lg">
                          <div className="rangeCircle" />
                        </div>
                        <span>750 APH</span>
                      </div>
                      <div className="range">
                        <span>T</span>
                        <div className="rangeBar rangeBar-xl">
                          <div className="rangeCircle" />
                        </div>
                        <span>1000 APH</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
