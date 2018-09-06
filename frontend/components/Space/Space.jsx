import React from 'react'
import styled from 'styled-components'

const SpaceStyled = styled.div`
  width: 100%;
  height: 1em;
`

const Space = ({children}) => (
  <SpaceStyled />
)

export default Space