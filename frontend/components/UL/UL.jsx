import React from 'react'
import styled from 'styled-components'

const ULStyled = styled.ul`
`

const UL = ({children}) => (
  <ULStyled>
    {children}
  </ULStyled>
)

export default UL