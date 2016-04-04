var React = require('react');

module.exports = React.createClass({
  displayName: 'Menu',

  getRanger: function(ranger) {
    this.props.get_Ranger(ranger)
  },

  render: function () {
    return (
    <div className="left-container">
      <ul>
        <li onClick={() => this.getRanger("jason")} >Jason</li>
        <li onClick={() => this.getRanger("billy")} >Billy</li>
        <li onClick={() => this.getRanger("zack")} >Zack</li>
        <li onClick={() => this.getRanger("trini")} >Trini</li>
        <li onClick={() => this.getRanger("kimberly")} >Kimberly</li>
        <li onClick={() => this.getRanger("tommy")} >Tommy</li>
     </ul>
    </div>
  );
  }

});

