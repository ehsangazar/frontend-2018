
import React from 'react'
import renderer from 'react-test-renderer';
import Space from './Space'

describe('Space', () => {
  it('should render without throwing an error', () => {
    const tree = renderer
    .create(<Space />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})