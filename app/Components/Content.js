var React = require('react');

module.exports = React.createClass({
  displayName: 'Content',

  getInitialState: function() {
  	return { serverData: null };
  },

  refreshData: function() {
  	// replace this with your favourite library for doing ajax calls
  	var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://destomorrow.cloudant.com/rangers/jason', true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      this.setState({ serverData: data });
    };
    xhr.send();
  },

  render: function () {
    return (
    <div>
      <img src="{this.state.data.Headshot_Url}" style="width:50%" />
      <table style="width:50%">
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
