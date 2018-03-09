import React, {Component} from 'react';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div id="modal1" className="modal fade show fullPageModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Event Detail</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body eventDetails-content">
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-map-marker text-red"></i>
                  </div>
                  <div className="col">
                    <p className="semiBoldText title">PetCo AQ1</p>
                    <p><span className="semiBoldText">Store #:</span> 1986</p>
                    <p className="text-red underLine">9237 Jerrold Freeway</p>
                    <p className="text-red underLine">Gussieton, IL 60606</p>
                    <p className=""></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-user text-red"></i>
                  </div>
                  <div className="col">
                    <p><span className="semiBoldText">Supervisor:</span> Ryan Reiss</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="far fa-clock text-red"></i>
                  </div>
                  <div className="col">
                    <p><span className="semiBoldText">Meet Site:</span></p>
                    <p className="text-red underLine">9237 Jerrold Freeway</p>
                    <p className="text-red underLine">Gussieton, IL 60606</p>
                    <p><span className="semiBoldText">Meet Time:</span> 7:00 PM</p>
                    <p><span className="semiBoldText">Start Time:</span> 7:00 PM</p>
                    <p><span className="semiBoldText">Estimated Duration:</span> 5 Hours</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col">
                      <p><span className="semiBoldText">Your ASET Targets:</span></p>
                      <div className="range">
                        <span>A</span>
                        <div class="rangeBar rangeBar-sm">
                          <div class="rangeCircle">
                          </div>
                        </div>
                        <span>250 APH</span>
                      </div>
                      <div className="range range-active">
                        <span>S</span>
                        <div class="rangeBar rangeBar-md">
                          <div class="rangeCircle">
                          </div>
                        </div>
                        <span>500 APH</span>
                      </div>
                      <div className="range">
                        <span>E</span>
                        <div class="rangeBar rangeBar-lg">
                          <div class="rangeCircle">
                          </div>
                        </div>
                        <span>750 APH</span>
                      </div>
                      <div className="range">
                        <span>T</span>
                        <div class="rangeBar rangeBar-xl">
                          <div class="rangeCircle">
                          </div>
                        </div>
                        <span>1000 APH</span>
                      </div>
                    </div>
                </div>
              </div>
              <div className="modal-footer col text-center">
                <button type="button" className="btn btn-rgis-transparent text-red semiBoldText">CALL SUPERVISOR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
