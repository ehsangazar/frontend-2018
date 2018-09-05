
import React from 'react'
import renderer from 'react-test-renderer';
import H1 from './H1'

describe('Typography', () => {
  it('H1 should render without throwing an error', () => {
    const tree = renderer
    .create(<H1 />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})