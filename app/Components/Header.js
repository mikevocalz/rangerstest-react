var React = require('react');

module.exports = React.createClass({
  displayName: 'Header',

  render: function () {
    return (
    	<div className='header'>
        <span className='header-menu'>
        </span>
        <img src="http://gabura.de/wp-content/themes/garuba/images/fa-bars.png" className="menu-img" />
    	Power Rangers Unlmited API
    	</div>
		)
	}

});


