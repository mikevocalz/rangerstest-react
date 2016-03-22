var React = require('react');

module.exports = React.createClass({
  displayName: 'Content',

  getInitialState: function() {
  	return { data: {} };
  },

  componentDidMount: function() {
  	// replace this with your favourite library for doing ajax calls
  	var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://destomorrow.cloudant.com/rangers/jason', true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      this.setState({ data: data });
    };
    xhr.send();
  },

  componentWillReceiveProps: function(nextProps) {
    var person = nextProps.ranger
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://destomorrow.cloudant.com/rangers/' + person, true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      this.setState({ data: data });
    };
    xhr.send();
  },

  render: function () {
    return (
    <div className="ranger-container">
      <img src={this.state.data.Headshot_Url} className="ranger-image" />
      <table >
        <tr>
          <td>Ranger Name: {this.state.data.Name}</td>
          <td>Ranger Color: {this.state.data.Ranger_Color}</td> 
          <td>Season: {this.state.data.Season}</td>
        </tr>
      </table>
    </div>
	);
  }

});
