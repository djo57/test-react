import React from "react";
import debounce from "lodash.debounce";
import storeProvider from "./storeProvider";

class SearchBar extends React.PureComponent{
    state = {
        searchTerm: ''
    }
    doSearch = debounce(()=>{
        this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300)
    handleSearch = (event) => {
        this.setState({ searchTerm: event.target.value}, () => {
            this.doSearch();
        })
        console.log(this.state.searchTerm);
    }
    render(){
        return(
            <input
                type="search"
                placeholder="your search"
                value={this.state.searchTerm}
                onChange={this.handleSearch}
            />
        );
    }
}

export default storeProvider()(SearchBar);