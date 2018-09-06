
import React from 'react'
import renderer from 'react-test-renderer';
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import P from './P'

describe('Typography', () => {
  it('H1 should render without throwing an error', () => {
    const tree = renderer
    .create(<H1 />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
  it('H2 should render without throwing an error', () => {
    const tree = renderer
    .create(<H2 />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
  it('H3 should render without throwing an error', () => {
    const tree = renderer
    .create(<H3 />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
  it('H4 should render without throwing an error', () => {
    const tree = renderer
    .create(<H4 />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
  it('P should render without throwing an error', () => {
    const tree = renderer
    .create(<P />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  }) 
})