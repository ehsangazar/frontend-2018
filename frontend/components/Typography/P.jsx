import React from 'react'
import styled from 'styled-components'

const PStyled = styled.p`
  font-size: 1.9em;
`

const P = ({children}) => (
  <PStyled>
    {children}
  </PStyled>
)

export default P