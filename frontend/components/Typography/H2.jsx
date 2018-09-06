import React from 'react'
import styled from 'styled-components'

const H2Styled = styled.h2`
  font-size: 1.5em;
`

const H2 = ({children}) => (
  <H2Styled>
    {children}
  </H2Styled>
)

export default H2