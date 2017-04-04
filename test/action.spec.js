var axios = require('axios');
var Q = require('q');
var _ = require('lodash');
var action = require('../app/actions/action.js');
var fetchData = action.fetchData;

describe('.fetchData', () => {
	var dispatch,
		deferred;
	beforeEach(() => {
		deferred = Q.defer();
		spyOn(axios, 'get').and.returnValue(deferred.promise);
		dispatch = jasmine.createSpy();
	});
	describe('with a successful response', () => {
		it('Dispatches receriveData', () => {
			fetchData()(dispatch);
			var response = jasmine.createSpyObj('response', ['data']);
			deferred.resolve(response);
			_.defer(() => {
				expect(dispatch).toHaveBeenCalledWith({
					type: 'RECEIVE_DATA',
					data: resnponse
				})
				done();
			});
		});
	});
});