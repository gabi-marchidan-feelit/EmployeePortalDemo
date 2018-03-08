import React, {Component} from 'react';
import Navigation from '../components/utils/navigation';
import Datepicker from '../components/utils/datepicker';

export default class ScheduleList extends Component {
	render() {
    return(
      <div>
        <div className="row">
          <Navigation />
          <Datepicker />
        </div>
        <div className="schedule-content">
          <div className="row">
            <div className="col schedule-date-interval">Oct. 7 - 13</div>
            <div className="col">
              <button type="button" className="btn schedule-confirm-week-button">CONFIRM WEEK</button>
            </div>
          </div>
          <div className="row">
            
          </div>
        </div>
      </div>
    );
  }
}