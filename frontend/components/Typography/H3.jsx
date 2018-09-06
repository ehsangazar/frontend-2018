import React from 'react'
import styled from 'styled-components'

const H3Styled = styled.h3`
  font-size: 1.3em;
`

const H3 = ({children}) => (
  <H3Styled>
    {children}
  </H3Styled>
)

export default H3