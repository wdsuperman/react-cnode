import React, { Component } from 'react';
import styled from 'styled-components'

class Showtopic extends Component {
  render() {
    const a = this.props.location.state[0]
    const d = this.props.location.state[0].content
    function createMarkup() {
      return {__html: d};
    }
    const sty ={marginTop:'26px',height:'25px',backgroundColor:'orange',color:'#fff',borderRadius:'3px',padding:'0 3px'
  }
    console.log(a)
    return (
      <div style={{backgroundColor:'#e1e1e1',paddingTop:'10px'}}>
      <Wrapper>
        <div style={{display:'flex'}}>
          <span style={ a.top || a.good ? sty: {}}>{a.top ? '置顶' : a.good ? '精华' : ''} </span>
          <h2 style={{marginLeft:'20px'}}>{a.title}</h2>
        </div>
        <span> · 发布于 1 个月前 · 作者 {a.author.loginname} · {a.visit_count} 次浏览量 </span>
        <hr/>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Wrapper>
      </div>
    );
  }
}

export default Showtopic;
const Wrapper = styled.div`
background-color:#fff;
  margin:15px;
  padding:10px;
  width:70%;
`