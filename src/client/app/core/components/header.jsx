/**
 * @jsx React.DOM
 */

var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var AppActions = require('./../actions/AppActions.jsx');


var Header = React.createClass({

  getRandomSong: function(){
    AppActions.generateFuturePlaylist();
    console.log('getting future playlist');
    
  },

  search: function(){
    console.log(this.refs.textInput.getDOMNode().value.trim());
    var artist = this.refs.textInput.getDOMNode().value.trim();
    AppActions.search(artist);
  },


  render: function() {
    return (
      <div className="header-container">
        <h1>Q-Rad.io</h1>
        <form className="header-form">
          <span> Choose the song: 
            <input ref="textInput" type="text" size="34" placeholder='select your song brotha!'></input>
          </span>
          <RaisedButton type="button" className="header-btn" value="go" id="go" name="go" label="Go" primary={true} onClick={this.search} />
          <RaisedButton type="button" className="header-btn" label="Random" primary={true} onClick={this.getRandomSong} />
        </form>
      </div>
    )
  }
})

module.exports = Header;