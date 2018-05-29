import React, { Component } from 'react';
import styled from 'styled-components'
class Header extends Component {
  render() {
    return (
      <Head>
        <img style={{width:'120px'}}src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
      </Head>
    );
  }
}

export default Header
const Head = styled.header`
  background-color:#3e3e3e;
  display:flex;
  align-items: center;
  width:100%;
  padding:10px;
`