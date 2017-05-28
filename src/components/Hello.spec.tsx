import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from './Hello';



describe('(Component) Hello', () => {
    it('should render properly', () => {
        const helloComponent = shallow(<Hello compiler='hello' framework='1.0'></Hello>)
        console.log(helloComponent.html())
        expect(helloComponent).not.toBeNull
    })
})