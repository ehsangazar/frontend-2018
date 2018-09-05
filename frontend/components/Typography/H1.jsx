import React from 'react'
import styled from 'styled-components'

const H1Styled = styled.h1`
  font-size: 1.9em;
`

const H1 = ({children}) => (
  <H1Styled>
    {children}
  </H1Styled>
)

export default H1