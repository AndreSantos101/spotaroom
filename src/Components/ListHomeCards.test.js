import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ListHomeCards from './ListHomeCards';
import HomeCard from "./HomeCard";

configure({ adapter: new Adapter() });

test('Rendering the correct amount of Homecards', () => {
    let list = shallow(<ListHomeCards listHomeCards={[1,2,3]} />);
    let number = list.children().length;
    expect(number).toBe(3);
    expect(list.find('HomeCard').length).toBe(3);
});
