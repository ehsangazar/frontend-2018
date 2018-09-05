
import React from 'react'
import renderer from 'react-test-renderer';
import LI from './LI'

describe('LI', () => {
  it('should render without throwing an error', () => {
    const tree = renderer
    .create(<LI />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})