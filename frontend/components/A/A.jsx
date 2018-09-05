import React from 'react'
import styled from 'styled-components'

const AStyled = styled.a`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: black;
  }
  :active {
    color: red;
  }
`

const A = ({children, ...props}) => (
  <AStyled {...props} >
    {children}
  </AStyled>
)

export default A