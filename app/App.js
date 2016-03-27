var React = require('react');

var Header = require('./Components/Header');
var Content = require('./Components/Content');
var Favicon = require('react-favicon');
var Menu = require('./Components/Menu');

var faviconUrl = require('./Assets/favicon.ico');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState: function(){
  	return {ranger:"jason"}
  },

  componentDidMount: function(){
    this.getRanger(this.state.ranger);
  },

  getRanger: function(ranger) {
    // replace this with your favourite library for doing ajax calls
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://destomorrow.cloudant.com/rangers/' + ranger , true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      this.setState({ ranger: data });
    };
    xhr.send();
  },

  render: function () {
    return (<div>
              <Header/>
              <Menu get_Ranger={this.getRanger} />
              <Content ranger={this.state.ranger} />
              <Favicon url={ faviconUrl }/>
            </div>)
  }

});