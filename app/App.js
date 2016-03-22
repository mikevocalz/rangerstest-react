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


  getRanger: function(ranger){
  	this.setState({ranger})
  },

  render: function () {
    return (<div>
              <Header/>
              <Menu getRanger={(ranger) => this.getRanger(ranger)} />
              <Content ranger={this.state.ranger} />
              <Favicon url={ faviconUrl }/>
            </div>)
  }

});