import React from 'react';

import Item from './item';
import strings from '../customization/strings'

import  '../css/calendar.css';



class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initDate: '',
      dayRender: 0,
      countryCode: ''
    };
  }
  onchange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className="calendar-container">
        <div className="container- labels">
          <div className="input-container">
            <span className="title-input">{strings.labels.initDate}</span>

            <input type="date" name="initDate" formMethod="dd/MM/YYYY" onChange={(e)=>{this.onchange(e)}} />
          </div>
          <div className="input-container">
            <span className="title-input">{strings.labels.dayRender}</span>
            <input type="number" name="dayRender" min={0} onChange={(e)=>{this.onchange(e)}} />
          </div>
          <div className="input-container">
            <span className="title-input-date">{strings.labels.countryCode}</span>
            <input type="text" name="countryCode" onChange={(e)=>{this.onchange(e)}} />
          </div>
        </div>
        <div className="container-result">
          <span>{this.state.initDate}</span>
          <br/>
          <span>{this.state.dayRender}</span>
          <br/>
          <span>{this.state.countryCode}</span>
          <Item initDate={this.state.initDate} dayRender={this.state.dayRender} />
        </div>
      </div>
    );
  }
}
export default Calendar;
