import React from 'react';

export default class Events extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.data.length === 0) {
       return null;
     } else {
       let eventNodes = this.props.data.map(function(event, index) {
         let eventSummary = event.description.split('.');
         return <div key={index}>{eventSummary[0]}</div>
       });

      return (
        <div id="historical-events" className="eventList">
          <ul className="events">{eventNodes}</ul>
        </div>
      );
     }
  }
}


