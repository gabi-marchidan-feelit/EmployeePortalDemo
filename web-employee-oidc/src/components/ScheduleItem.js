import React, {Component} from 'react';

export default class ScheduleItem extends Component {
  render() {
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
          <div className="schedule-card-info schedule-card-active-blue">
            <div className="schedule-card-info-title">
              PetCo AQ1
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
            <div class="schedule-card-buttons-wrapper">
              <button className="btn btn-rgis-red">CONFIRM</button>
              <button className="btn float-right btn-rgis-transparent text-red">REQUEST CHANGE</button>
            </div>
            <div class="schedule-card-buttons-wrapper text-center">
              <button className="btn btn-rgis-transparent text-yellow">PENDING REVIEW</button>
            </div>
          </div>

        </div>
        <div className="col-10 schedule-card-status text-center available">
          <span className="schedule-card-available-status">AVAILABLE:  </span>
          <span className="schedule-card-available-interval">12:00 AM - 11:59 PM</span>
        </div>
        <div className="col-10 schedule-card-status text-center unavailable">
          <span className="schedule-card-available-status">UNAVAILABLE</span>
        </div>
      </div>
    );
  }
}
