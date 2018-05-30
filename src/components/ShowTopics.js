import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

class ShowTopics extends Component {
  state={
    topics:[]
  }

  getTopics = tab =>{
    const uri = `https://cnodejs.org/api/v1/topics?tab=${tab}`
    axios.get(uri).then(res => {
      this.setState({
        topics:res.data.data
      })
    })
  }

  componentDidMount(){
    this.getTopics(this.props.tab)
  }
  componentWillReceiveProps(nextProps) {
    this.getTopics(nextProps.tab)
  }
  
  type = tab => {
    switch(tab){
      case 'ask': return '问答';
      case 'share': return '分享';
      case 'job': return '招聘';
      default : return null;
    }
  }
  render() {
    const { topics } = this.state
    const topicsList = topics.length === 0 ? '等一哈': topics.map( topic => <List key={topic.id}>
    <Link to={{user:`/user/${topic.loginname}`,state:topics.filter(t => t.id === topic.author_id)}}><img style={{width:'40px'}} src={topic.author.avatar_url} alt=""/></Link>
      <div style={{width:'100px',textAlign: 'center'}}>
        <span title='回复数'>{topic.reply_count}</span>
        /
        <span title='浏览量'>{topic.visit_count}</span>
      </div>
      <span style={{backgroundColor: topic.top || topic.good ? 'orange':'#ccc',color:topic.top || topic.good ? '#fff':'#000',borderRadius:'3px',padding:'0 3px'}}>{topic.top ? '置顶' : topic.good ? '精华' :  this.type(topic.tab)}</span>
      <h3 style={{marginLeft:'10px'}}> <Link to={{
        pathname:`/topic/${topic.id}`,
        state:topics.filter(t => t.id === topic.id)
      }}>{topic.title}</Link></h3>
    </List>
    )
    return (
      <Wrapper>
        {topicsList}
      </Wrapper>
    );
  }
}

export default ShowTopics;
const Wrapper = styled.div`
  background-color:#fff;
  border-radius:10px;
`
const List = styled.div`
  display:flex;
  padding:10px;
  align-items:center;
  font-size:14px;
  h3{
    magin:0;
    font-weight:normal;
    flex-grow:1;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  h3 a{
    color:#000;
  }
  h3 a:visited{
    color:#ccc;
  }
  h3 a:hover{
    text-decoration: underline;
  }
`