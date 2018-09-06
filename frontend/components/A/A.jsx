import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import getRoutes from '../../routes'
const routes = getRoutes()

const AStyled = styled.a`
  color: blue;
  display: flex;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: black;
  }
  :active {
    color: red;
  }
`
const LoadincContainerStyled = styled.div`
  width: 1em;
  padding-right: 0.5em;
  height: 1em;
`

class A extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }
  _handleOnClick = (event) => {
    event.preventDefault()
    const { href } = this.props

    let route = null
    routes.forEach(item => {
      if (route === null){
        if (href.match(item.regex) ) {
          route = item
        }
      }
    })

    if (route){
      this.setState({
        loading: true
      }, () => {
        Router.push(route.page, href)
      })
    }
  }

  componentWillUnmount(){
    this.setState({
      loading: false
    })
  }

  render() {
    const { children } = this.props
    const { loading, href } = this.state
    return (
      <AStyled href={href} onClick={this._handleOnClick}>
        {loading &&
          <LoadincContainerStyled>
            <LoadingIcon />
          </LoadincContainerStyled>
        }
        {children}
      </AStyled>
    )
  }
}

export default A