var React = require('react');
var Provider = require('react-redux').Provider;
var configureMockStore = require('redux-mock-store').default;
var actions = require('../app/actions/action.js');
var App = require('../app/Component/app.js');
var ConnectedApps = require('../app/Component/connected_app.js');
var TestUtils = require('react-test-utils');

describe('ConnectedApp', () => {
	var MockStore = configureMockStore();
	var connectedApp, store, initialItems;

	beforeEach(() => {
		initialItems = ['one'];
		var initialState = {
			items: initialItems
		}
		store = MockStore(initialState);
		connectedApp = TestUtils.renderIntoDocument(<Provider store={ store }><ConnectedApps /></Provider>);		
	});
	describe('actions passed down by the store', () => {
		var addItemValue;

		beforeEach(() => {
			addItemValue = jasmine.createSpyObj('addItemValue', ['type']);
			spyOn(actions, 'addItem').and.returnValue(addItemValue);
			spyOn(store, 'dispatch');
		});
		
		it('passes down the action to add an item', () => {
			app = TestUtils.findRenderedComponentWithType(ConnectedApps, App);
			aap.props().dispatchAddItem();
			expect(store.dispatch).toHaveBeenCalledWith(addItemValue);
		});
	});
});