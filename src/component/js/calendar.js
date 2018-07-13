import React from 'react';

import strings from '../customization/strings'

import  '../css/calendar.css';



class Calendar extends React.PureComponent {


  render(){
    return(
      <div className="calendar-container">
        <div className="input-container">
          <span className="title-input">{strings.labels.initDate}</span>

          <input type="date" />
        </div>
        <div className="input-container">
          <span className="title-input">{strings.labels.dayRender}</span>
          <input type="number" />
        </div>
        <div className="input-container">
          <span className="title-input-date">{strings.labels.countryCode}</span>
          <input type="text" />
        </div>
      </div>
    );
  }
}
export default Calendar;
