var React = require('react');

module.exports = React.createClass({
  displayName: 'Header',

  render: function () {
    return (
    	<div className='header'>
        <span className='header-menu'>
        </span>
         <img src="https://destomorrow.cloudant.com/logo/logo/pr-unlimited-logo.png" className="pru-logo" />
        <img src="https://goo.gl/3CkqB0" className="menu-img" />
    	<img src="https://goo.gl/QhwfHR" className="settings-img" />
        <h1><b>Power Rangers Unlimited</b></h1>
    	</div>
		)
	}

});


