import React from 'react'
import styled from 'styled-components'

const LoadingIconStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  border: 2px solid grey;
  border-top: 2px solid black;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(45deg); }
    30% { transform: rotate(50deg); }
    70% { transform: rotate(310deg); }
    75% { transform: rotate(315deg); }
    100% { transform: rotate(360deg); }
  }
`

const LoadingIcon = () => (
  <LoadingIconStyled />
)

export default LoadingIcon