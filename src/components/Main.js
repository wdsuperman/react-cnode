import React, { Component } from 'react';
import styled from 'styled-components'
import ShowTopics from './ShowTopics';

class Main extends Component {
  state={
    tab:'all'
  }
  handleText=tab=>{
    this.setState({
      tab : tab
    })
  }
  render() {
    const tabs = [
      {tab:'all',tabText:'全部'},
      {tab:'good',tabText:'精华'},
      {tab:'share',tabText:'分享'},
      {tab:'ask',tabText:'问答'},
      {tab:'job',tabText:'招聘'}
    ]
    const tabList = tabs.map( (tab,index) => <li style={{margin:'0 10px',color:'#80bd01'}} key={index}><span style={{padding:'0 3px',borderRadius:'3px',backgroundColor:this.state.tab === tab.tab&&'orange',cursor:'pointer',color:this.state.tab === tab.tab&&'#fff'}} onClick={()=>this.handleText(tab.tab)} to={`/${tab.tab}`}>{tab.tabText}</span></li>
  )
    return (
      <Wrapper>
        <nav>
          <ul style={{display:'flex'}}>
            {tabList}
          </ul>
        </nav>
        <ShowTopics tab={this.state.tab}/>
      </Wrapper>
    );
  }
}

export default Main;
const Wrapper = styled.section`
  background-color:#e1e1e1;
  padding:10px 20px;
`