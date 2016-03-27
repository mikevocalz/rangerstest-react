var React = require('react');

module.exports = React.createClass({
  displayName: 'Content',

  render: function () {
    return (
    <div className="ranger-container">
      <img src={this.props.ranger.Headshot_Url} className="ranger-image" />
      <table >
        <tr>
          <td>Ranger Name: {this.props.ranger.Name}</td>
          <td>Ranger Color: {this.props.ranger.Ranger_Color}</td> 
          <td>Season: {this.props.ranger.Season}</td>
        </tr>
      </table>
    </div>
	);
  }

});
