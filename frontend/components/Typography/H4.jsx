import React from 'react'
import styled from 'styled-components'

const H4Styled = styled.h4`
  font-size: 1.1em;
`

const H4 = ({children}) => (
  <H4Styled>
    {children}
  </H4Styled>
)

export default H4