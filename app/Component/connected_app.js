var React = require('react');
var ReactRedux = require('react-redux');
var App = require('./app.js');
var actions = require('../actions/action.js')

var mapStateToProps = function (state) {
	{
		items: state.items;
	}
}
var mapDispatchToProps = function (dispatch) {
	return ({
		dispatchAddItem: () => {
			dispatch(actions.addItem());
		}
	});
}

var ConnectedApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

module.exports = ConnectedApp;