var reducer = require('../app/reducers/reducer.js');

describe('reducer', () => {
	describe('default', () => {
		it('returns initial state', () => {
			expect(reducer()).toEqual({items: []});
		});
	});
	describe('on ADD_ITEM action', () => {
		var state;
		beforeEach(() => {
			state = {
				items: ['one']
			}
		});
		it('returns the state with new item added', () => {
			expect(reducer(state, {type: 'ADD_ITEM', data: 'two'})).toEqual({items: ['one', 'two']});
		});
	});
});