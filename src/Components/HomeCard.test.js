import HomeCard from './HomeCard';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('HomeCard Tests', () => {
    let homeCardWrapper;
    beforeAll(() => {
        homeCardWrapper = shallow(<HomeCard homeCard={
            {
                currencySymbol: '€', pricePerMonth: 100
                , title: 'A nice room', type: 'Room', photoUrls: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f', isFavorite: true
            }
        } count={1} />);
    });
    test('favorite Function', () => {
        expect(homeCardWrapper.instance().favorite(true)).toBe(' and is one of ours Favourites!');
        expect(homeCardWrapper.instance().favorite(false)).toBe('');
    });

    test('changeDetailsFlag Function', () => {
        expect(homeCardWrapper.state().visible).toEqual(false);
        homeCardWrapper.instance().changeDetailsFlag();
        expect(homeCardWrapper.state().visible).toEqual(true);
    });

    test('Homecard Component test', () => {

        /*Verifying if each element has the correct value*/
        expect(homeCardWrapper.find('.homeImage').props().src).toEqual('https://images.unsplash.com/photo-1416339306562-f3d12fefd36f');
        expect(homeCardWrapper.find('.description').first().text()).toEqual('A nice room');
        expect(homeCardWrapper.find('.priceLabel').text()).toEqual('100€');
        expect(homeCardWrapper.find('.moreDetails').props().id).toEqual('1_moreDetails');
        expect(homeCardWrapper.find('.primaryButton').length).toBe(1);
        expect(homeCardWrapper.find('.secondaryButton').length).toBe(1);

        /* Test the simulation of a click and the respective function calls */
        const firstButton = homeCardWrapper.find('.primaryButton');
        const secondButton = homeCardWrapper.find('.secondaryButton');

            /*Mocking the function, because the actual function handles windows object manipulation which may cause error on tests */
            homeCardWrapper.instance().bookNow = jest.fn();

        const spyPrimary = jest.spyOn(homeCardWrapper.instance(), 'bookNow');
        const spySecondary = jest.spyOn(homeCardWrapper.instance(), 'changeDetailsFlag');

        firstButton.simulate('click');
        secondButton.simulate('click');

        expect(spyPrimary).toHaveBeenCalledTimes(1);
        expect(spySecondary).toHaveBeenCalledTimes(1);

    });

});
