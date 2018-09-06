
import React from 'react'
import renderer from 'react-test-renderer';
import LoadingIcon from './LoadingIcon'

describe('LoadingIcon', () => {
  it('should render without throwing an error', () => {
    const tree = renderer
    .create(<LoadingIcon />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})