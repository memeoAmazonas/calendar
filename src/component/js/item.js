import React from 'react';

class Item extends React.PureComponent {
  result = () => {
console.log(typeof(this.props.initDate));


  }
  render() {
    return(
      <div>
        {this.result}
      </div>
    );
  }

}

export default Item;

