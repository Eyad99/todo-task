// import React ,{useState} from 'react';
import React , {Component} from 'react';
import './index.css';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import 'antd-button-color/dist/css/style.css';
// import Button from "antd-button-color";
import moment from 'moment';
import {Layout , Button , Input , Row , Col} from 'antd';
import { PlusOutlined , CloseCircleOutlined , CheckOutlined , EditFilled , DeleteFilled} from '@ant-design/icons';
import { blue , green } from '@ant-design/colors';
import {add_todo,edit_todo,remove_todo,clear_todo,completed,canceled} from './actions';

class App extends Component{
  state={
    text : '',
    date : new Date(),
    background : '',
    display : '',
    color : ''
  }
  
  render_todo = () =>{
    const {todo} = this.props;
    console.log(todo)
    return(
      <div>
        {
          todo.map(alltodo => {
           return(
              <Row className="todo" style={{ background : alltodo.background }} key={alltodo.id}>
                  <Col xs={24} xl={8}>
                    <p style={{ color : alltodo.color }}>{moment(new Date(alltodo.date)).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <h4 style={{ color : alltodo.color }}>{alltodo.text}</h4>
                  </Col>
                <Col xs={24} xl={8} className="icon">
                  <Button size="large" type="danger" icon ={<DeleteFilled />} shape="circle" onClick={() => this.props.remove_todo(alltodo.id)}></Button>
                  <div style={{ display : alltodo.display }}>
                    <Button size="large" type="primary" icon={<EditFilled />} shape="circle" onClick={() => this.props.edit_todo(alltodo.id)}></Button>
                    <Button size="large" type="danger"  shape="circle" onClick={() => this.props.canceled(alltodo.id)}>X</Button>
                    <Button size="large" type="success" icon={<CheckOutlined />} shape="circle" onClick={() => this.props.completed(alltodo.id)}></Button>
                  </div>
                </Col>
               </Row>
               

           ) 
          })
        }
      </div>
    )
  }
  render(){
console.log(this.props);
    const {Content} = Layout;
    const  size  = 'large';
    return(
      <Layout className="layout">
             <h1 className="h1">Todo List</h1>
      
           <Content className="site-layout-background content"
             style={{
               margin: '14px 16px',
               padding: 24,
               minHeight: 660,
               }}
             >
               <Row style={{ textAlign : 'center'}}>
                 <Col xs={24} lg={12} xl={12} style={{ paddingRight : 10 }}>
                  <Input type="text" value={this.state.text} onChange ={(e) =>this.setState({text : e.target.value})} placeholder="Add New Todo" />
                 </Col>
                 <Col xs={24} lg={8} xl={12} >
                   {/* <Button size={size} onClick={() => { if(this.state.text === ''){return this.state.text} else{this.props.add_todo(this.state.text,this.state.background,this.state.display);} this.setState({text : ''})}} > Add </Button>
                        <Button danger size={size} onClick={() => {this.props.clear_todo()}} > Delete All todo </Button> */}
                  <Button type="success" shape="circle" icon={<PlusOutlined />} size={size} style={{ marginRight : 10 }} onClick={() => { if(this.state.text === ''){return this.state.text} else{this.props.add_todo(this.state.text,this.state.date,this.state.background,this.state.display);} this.setState({text : ''})}} />
                  <Button type="danger" shape="circle" icon={<CloseCircleOutlined />} size={size} onClick={() => {this.props.clear_todo()}} />
                 </Col>
               </Row>
              {this.render_todo()}
           </Content>
      </Layout>
    )
  }
}

function mapStateToProps(state){
  return{
    todo :state
  }
}


export default connect(mapStateToProps,{add_todo,remove_todo,edit_todo,clear_todo,completed,canceled})(App);
