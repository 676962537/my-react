import React from "react"
import { HashRouter, BrowserRouter, Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
function Show({match}) {
  return (
      <div>
        match.url:{match.url}
      </div>
  )
}
function Inter(){
  let history = useHistory();
  function clickFn(){
    history.push("/index/index2");
  }
  return (<div>
    <div onClick={clickFn}>index2 history</div>
  </div>)
}
class Index extends React.Component{
  state = {
  }
  componentWillMount(){

  }
  clickFn(){
  }
  render() {
    return (
        <div>
          <div>这是 index App</div>
          <Link to='/index'>回到index</Link>
          <Link to='/index/index1'>index1</Link>
          {/*<Link to='/index/index2'>index2</Link>*/}
          <Inter />
          <Route path={`${this.props.match.url}/index1`} component={Show}/>
          <Route path={`${this.props.match.url}/index2`} component={Show}/>
        </div>
    );
  }
}
export default Index
