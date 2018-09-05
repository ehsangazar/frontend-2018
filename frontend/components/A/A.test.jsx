
import React from 'react'
import renderer from 'react-test-renderer';
import A from './A'

describe('A', () => {
  it('should render without throwing an error', () => {
    const tree = renderer
    .create(<A />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})