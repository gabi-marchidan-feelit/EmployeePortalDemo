import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class Datepicker extends Component {
  constructor (props) {
    super(props);

    this.state = {
      startDate: moment(),
      nextWeek: moment(moment(moment()).add(7, "days").calendar()).format('DD')
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.handlePrevMonth = this.handlePrevMonth.bind(this);
  }

  handleChange(date) {
    // const nextWeek = moment(moment(date).add(7, "days").calendar()).format('DD');
    const nextWeek = moment(date).add(7, "days").format('DD');
    this.setState({
      startDate: date,
      nextWeek
    });
  }

  handleChangeRaw(value) {
    if(value === "tomorrow") {
      const tomorrow = moment().add(1, "day");
      this.handleChange(tomorrow);
    }
  }

  handleNextMonth() {
    const {startDate} = this.state;
    const nextMonth = moment(startDate).add(1, 'M');
    this.handleChange(nextMonth);
  }

  handlePrevMonth() {
    const {startDate} = this.state;
    const prevMonth = moment(startDate).subtract(1, 'M');
    this.handleChange(prevMonth);
  }

  render() {
    const {nextWeek} = this.state;
    return (
      <div className="datepicker-wrapper">
        <div className="datepicker-center">
          <div onClick={this.handlePrevMonth}>
            <i className="fas datepicker-icon fa-caret-left" />
          </div>
          <i className="fas datepicker-icon fa-calendar-alt" />
          <div className="datepicker-calendar">
            <DatePicker
              className="col-md-12"
              selected={this.state.startDate}
              onChange={this.handleChange}
              highlightDates={[moment(this.state.startDate).add(7, "days")]}
              dateFormat="MMM. DD"
              onChangeRaw={(event) =>
                this.handleChangeRaw(event.target.value)}
              withPortal />
          </div>
          <div className="datepicker-next-month"> - {nextWeek}</div>  
          <div onClick={this.handleNextMonth}>
           <i className="fas datepicker-icon fa-caret-right"/>
          </div>
        </div>
      </div>
    );
  }
}