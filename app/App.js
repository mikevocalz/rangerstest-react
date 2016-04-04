var React = require('react');

var Header = require('./Components/Header');
var Menu = require('./Components/Menu');
var Content = require('./Components/Content');
var Footer = require('./Components/Footer');
var Favicon = require('react-favicon');


var faviconUrl = require('./Assets/favicon.ico');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState: function(){
  	return {
          ranger:{
              Ranger_Color: [],
              Headshot_Url: {},
              Bio: []
          }
      }
  },

  componentDidMount: function(){
    this.getRanger("tommy");
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
//test start



//test end
  render: function () {
    return (<div>
              <Header/>
              <Menu get_Ranger={this.getRanger} />
              <Content ranger={this.state.ranger} />
              <Footer/>
              <Favicon url={ faviconUrl }/>
            </div>)
  }

});