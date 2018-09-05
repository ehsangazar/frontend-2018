import React from 'react'
import styled from 'styled-components'

const LIStyled = styled.li`
  list-style: none;
`

const LI = ({children}) => (
  <LIStyled>
    {children}
  </LIStyled>
)

export default LI