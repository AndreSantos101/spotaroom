import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import ListHomeCards from './Components/ListHomeCards';
import Header from './Components/Header';
import App from "./App";

configure({ adapter: new Adapter() });

let appShallow = mount(<App></App>);

test('renders React Components correctly', () => {
  
  expect(appShallow).toBeDefined();
  expect(appShallow.find(Header).length).toEqual(1);
  expect(appShallow.find(ListHomeCards).length).toEqual(1);

});

test('componentDidMount Method working', () =>{

  //spyOn(App.prototype, 'componentDidMount').and.callThrough();
  App.prototype.componentDidMount= jest.fn();
  mount(<App />);
  expect(App.prototype.componentDidMount).toHaveBeenCalled();
  expect(App.prototype.componentDidMount).not.toThrow();
})