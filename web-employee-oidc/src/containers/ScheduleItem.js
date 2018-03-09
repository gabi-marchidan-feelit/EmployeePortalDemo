import React, {Component} from 'react';
import EventDetails from './eventDetails';

export default class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: 'false'
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.modalState = false;
  }

  handleModalOpen(e) {
    e.preventDefault();
    const {showModal} = this.state;
    this.setState({
      showModal: showModal === 'false' ? 'true' : 'false'
    });
  }
  render() {
    const {showModal} = this.state;
    return(
      <div className="row schedule-content-card">
        <div className="col schedule-card-date schedule-card-today">
          <div className="schedule-card-date-day">
            7
          </div>
          <div className="schedule-card-date-month">
            Oct.
          </div>
        </div>
        <div className="col-10 schedule-card noPadding">
          <div className="schedule-card-info schedule-card-active-blue" onClick={this.handleModalOpen}>
            <div className="schedule-card-info-title">
              PetCo AQ1 {showModal}
            </div>
            <div className="schedule-card-info-address">
              9237 Jerrold Freeway
            </div>
            <div className="schedule-card-info-address">
              Gussieton, IL 60606
            </div>
          </div>
          <div className="schedule-card-details">
            <div className="schedule-card-details-item">
              Meet Site:<span className="schedule-card-details-item-type">Store</span>
            </div>
            <div className="schedule-card-details-item">
              Meet Time:<span className="schedule-card-details-item-type">7:00 PM CST</span>
            </div>
            <div className="schedule-card-details-item">
              Estimated Duration:<span className="schedule-card-details-item-type">5 hours</span>
            </div>
            <div className="schedule-card-buttons-wrapper">
              <button className="btn btn-rgis-red">CONFIRM</button>
              <button className="btn float-right btn-rgis-transparent text-red">REQUEST CHANGE</button>
            </div>
            <div className="schedule-card-buttons-wrapper text-center">
              <button className="btn btn-rgis-transparent text-yellow">PENDING REVIEW</button>
            </div>
          </div>

        </div>
        <div className="col-10 offset-2 noPadding">
          <div className="schedule-card-status text-center available">
            <span className="schedule-card-available-status">AVAILABLE:  </span>
            <span className="schedule-card-available-interval">12:00 AM - 11:59 PM</span>
          </div>
          <div className="schedule-card-status text-center unavailable">
            <span className="schedule-card-available-status">UNAVAILABLE</span>
          </div>
        </div>
        <EventDetails showModal={showModal}/>
      </div>
    );
  }
}
