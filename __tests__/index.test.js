import { shallow } from 'enzyme'
import React from 'react'
import App from '../pages/index.js';

describe('Index.js page', () => {
    it('has a "<p>" tag', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').length).toBe(1)
    })
    it('will fail', () => {
    expect(false).toBe(true)
    })
})