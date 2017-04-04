var axios = require('axios');

function fetchData() {
	return () => dispatch => {
		axios.get('http://example.com')
		.then(
			response => {
				dispatch(receiveData(response));
			}
		)
	}
}

function receiveData(response) {
	return {
		type: 'RECEIVE_DATA',
		data: response
	}
}

module.exports = {
	fetchData: fetchData,
	receiveData: receiveData
}