import React from "react";
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp";

class App extends React.PureComponent{
  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext(){
    return{
      store: this.props.store
    };
  }

  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }

  state = this.appState();
  //state = this.props.store.getState();

  onStoreChange = () => {
    //this.setState(this.props.store.getState());
    this.setState(this.appState());
  }

  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  /*shouldComponentUpdate(nextProps, nextState){
    return(
      nextState.articles !== this.state.articles || nextState.searchTerm !== this.state.searchTerm
    );
  }*/

  ins = (search) => new RegExp(search, "i");

  render(){
    let {articles, searchTerm} = this.state;
    if(searchTerm){
      articles = pickBy(articles, (value) => {
        return value.title.match(this.ins(searchTerm)) || value.body.match(this.ins(searchTerm));
      })
    }
    return(
      <div>
      <Timestamp />
      <SearchBar />
      <ArticleList
        articles={articles}
      />
      </div>
    );
  }
}

export default App;