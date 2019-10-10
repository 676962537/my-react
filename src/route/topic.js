import React from "react"
import { HashRouter, BrowserRouter, Switch, Route, Link } from "react-router-dom";
function Show({match}) {
  console.log("match.params.topicId:",match.params.topicId);
  return (<div>当前topic id 为 {match.params.topicId}</div>)
}
class Topic extends React.Component{
  componentWillMount(){
    // console.log("this.props:",this.props);
    // console.log("this.props.match:",this.props.match);
  }
  render() {
    return (
        <div>
          <HashRouter>
            <Switch>
              <Route path={`${this.props.match.path}/:topicId`} component={Show} />
              {/*<Route path={`${this.props.match.path}/:topicId`}>*/}
              {/*  <div>当前topic id 为 {this.props.match.params.topicId}</div>*/}
              {/*</Route>*/}
              <Route path={this.props.match.url}>默认topic文件</Route>
            </Switch>
          </HashRouter>
        </div>
    );
  }
}
export default Topic
