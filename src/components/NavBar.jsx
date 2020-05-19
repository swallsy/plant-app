import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links';

const Nav = styled.nav.attrs(props => ({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
}))`
  margin-bottom: 20 px;
`;

const Container = styled.div.attrs(props => ({
  className: 'container',
}))``;


class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Container>
    )
  }
}

export default NavBar;