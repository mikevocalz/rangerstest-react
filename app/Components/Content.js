var React = require('react');

module.exports = React.createClass({
  displayName: 'Content',


  render: function () {
    var color = this.props.ranger.Ranger_Color[0]
    
    return (
    <div className="ranger-container">
      <img src={this.props.ranger.Headshot_Url[color]} className="ranger-image" />
        <ul className="ranger-info">
          <li>Ranger Name: {this.props.ranger.Name}</li>
          <li>Ranger Color: {this.props.ranger.Ranger_Color}</li> 
          <li>Season: {this.props.ranger.Season}</li>
          <li>Full Name: {this.props.ranger.Full_Name}</li>
          <li>Actor: {this.props.ranger.Actor}</li>
          <li>Weapons: {this.props.ranger.Weapons}</li>
          <li>Gear: {this.props.ranger.Gear}</li>
          <li>Zords: {this.props.ranger.Zords}</li>
          <li>First Appearance: {this.props.ranger.First_Appearance}</li>
          <li>Last Appearance: {this.props.ranger.Last_Appearance}</li>
          <li>Sentai Counterpart: {this.props.ranger.Sent_Counterpart}</li>
          <li>Number of Episodes: {this.props.ranger.Number_of_Episodes}</li>
          <li><h3>Bio: </h3></li>
          <li>{this.props.ranger.Bio[color]} </li>
        </ul>
    </div>
    
	);
  }

});