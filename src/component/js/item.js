import React from 'react';

import '../css/item.css';

class Item extends React.PureComponent {
  result = () => {
    let response = this.props.initDate.split('-');
    let fullDate =[];
    let year = parseInt(response[0]);
    let month = parseInt(response[1])-1;
    let day = parseInt(response[2]);
    let sunday=[];
    let monday=[];
    let tuesday=[];
    let wednesday=[];
    let thursday=[];
    let friday=[];
    let saturday=[];
    for(var i = 0; i< this.props.dayRender; i++){
      let date = new Date(year,month,day+i);
      switch (date.getDay()){
        case 0:
          sunday.push(
            <div>
              <span>
              {date.getDate()}
             </span>
              <hr/>
            </div>);
          break;
        case 1:
          monday.push(<div className="item-2">{date.getDate()}</div>);
          break;
        case 2:
          tuesday.push(<div className="item-2">{date.getDate()}</div>);
          break;
        case 3:
          wednesday.push(<div className="item-2">{date.getDate()}</div>);
          break;
        case 4:
          thursday.push(<div className="item-2">{date.getDate()}</div>);
          break;
        case 5:
          friday.push(<div className="item-2">{date.getDate()}</div>);
          break;
        case 6:
          saturday.push(<div className="item-2">{date.getDate()}</div>);
          break;
        default:
          break
      }

    }
    fullDate.push(<div  className="item" key="fullDate">
      {sunday}


      {monday}
      <hr/>
      {tuesday}
      <hr/>
      {wednesday}
      <hr/>
      {thursday}
      <hr/>
      {friday}
      <hr/>
      {saturday}
      <hr/>
    </div>);
    return fullDate;
  }
  render() {
    return(
      <div>
        {this.result()}
      </div>
    );
  }

}

export default Item;

