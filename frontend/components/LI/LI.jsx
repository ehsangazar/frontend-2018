import React from 'react'
import styled from 'styled-components'

const LIStyled = styled.li`
`

const LI = ({children}) => (
  <LIStyled>
    {children}
  </LIStyled>
)

export default LI