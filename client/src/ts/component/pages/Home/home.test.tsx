import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new ReactSixteenAdapter() });

import Home from './index';

describe('hoge', () => {
  it('hogehoge', () => {
    const wrapper = shallow(<Home />);
    const pElement = wrapper.find('p').at(0);
    expect(pElement.text()).toBe('home');
  });
});
