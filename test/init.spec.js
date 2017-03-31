import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BasicClass from '../app/Component/basicClass';

// describe('Run this test for basic assertion', () => {
// 	it('should return addition of 2 numbers', () => {
// 		expect(2 + 2).to.equal(4);
// 	});
// });

describe('load first component', () => {
	it('load frist app', () => {
		var component = shallow(<BasicClass />);
		expect(component).to.have.length(1);
	});
});
