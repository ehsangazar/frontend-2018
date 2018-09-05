import React from 'react'
import styled from 'styled-components'

const ULStyled = styled.ul`
  padding: 0;
  margin: 0;
`

const UL = ({children}) => (
  <ULStyled>
    {children}
  </ULStyled>
)

export default UL