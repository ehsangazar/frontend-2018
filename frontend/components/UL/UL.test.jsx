
import React from 'react'
import renderer from 'react-test-renderer';
import UL from './UL'

describe('UL', () => {
  it('should render without throwing an error', () => {
    const tree = renderer
    .create(<UL />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})