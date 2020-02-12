// import React from 'react';
// import Movie from '../components/Movie'
// import renderer from 'react-test-renderer';
// import {render, cleanup} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

// afterEach(cleanup)
// it('matches snapshot', () => {
//     const tree = renderer.create(<Movie />).toJSON()
//     expect(tree).toMatchSnapshot()
// });

import {mount} from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Movie from '../components/Movie'
import {MovieContextProvider} from '../MovieContext'

test("matches snapshot", () => {
    const wrapper = mount(
        <MovieContextProvider>
    <Movie />
    </MovieContextProvider>)
    expect(toJSON(wrapper).toMatchSnapshot())
})