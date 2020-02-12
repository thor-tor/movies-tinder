// import React from 'react';
// import renderer from 'react-test-renderer';
// import {render, cleanup} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

// afterEach(cleanup)

import {mount} from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import {act} from 'react-dom/test-utils'

jest.mock("../MovieContext.js", () => {
    return {
        __esModule:true,
        default: async () => [
        {            
            id: 1,
            imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            title: "Test Movie 1",
            summary: "test desc",
            rating: "1"
        },
        {            
            id: 2,
            imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            title: "Test Movie 2",
            summary: "test desc",
            rating: "1"
        }
        ]
    }
})

test("matches snapshot", async () => {
    const MovieContextProvider = require('../MovieContext').default
    let wrapper
    await act(async () => {
        wrapper = mount(<MovieContextProvider/>)
    })

    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
})