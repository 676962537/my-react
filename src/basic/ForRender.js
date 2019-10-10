// 列表渲染

import React from 'react'
class ForRender extends React.Component{
  state = {
    dataList:[1,2,3,4,5]
  }
  add(){
    let dataList = this.state.dataList;
    dataList.push("mahenan");
    this.setState({
      dataList:dataList
    })
  }
  deleted(){
    let dataList = this.state.dataList;
    dataList.splice(2,1);
    this.setState({
      dataList:dataList
  })
  }
  change(){
    this.setState({
      dataList:[1,2,3,4,6]
    })
  }
  // 3种render方法都是可以的

  // render(){
  //   return (<div>
  //     <div onClick={(e) => this.add(e)}>添加数据</div>
  //     <div onClick={(e) => this.deleted(e)}>删除数据</div>
  //     <div onClick={(e) => this.change(e)}>修改数据</div>
  //     {
  //       this.state.dataList.map((item,index) => {
  //         return <li key={index}>{item}--{index}</li>
  //       })
  //     }
  //   </div>)
  // }

  // render(){
  //   let messageItem = this.state.dataList.map((item,index) => {
  //     return <li key={index}>{item}--{index}</li>
  //   });
  //   function Message() {
  //     return (<ul>
  //       {messageItem}
  //     </ul>)
  //   }
  //   return (<div>
  //     <div onClick={(e) => this.add(e)}>添加数据</div>
  //     <div onClick={(e) => this.deleted(e)}>删除数据</div>
  //     <div onClick={(e) => this.change(e)}>修改数据</div>
  //     <Message />
  //   </div>)
  // }

  render(){
    let messageItem = this.state.dataList.map((item,index) => {
      return <li key={index}>{item}--{index}</li>
    });
    return (<div>
      <div onClick={(e) => this.add(e)}>添加数据</div>
      <div onClick={(e) => this.deleted(e)}>删除数据</div>
      <div onClick={(e) => this.change(e)}>修改数据</div>
      {messageItem}
    </div>)
  }
}
export default ForRender
