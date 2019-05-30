import React from 'react';
import Header from "./Header";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

test('Header rendering test', () => {
    let header = shallow(<Header title="spotaroom"/>);
    expect(header.find('#Header_id').text()).toEqual("spotaroom");
    expect(header).toBeDefined();
    expect(header.find('.option').length).toBe(3);

});
