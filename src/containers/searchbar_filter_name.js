import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { renderGitHubData, renderMatchedBarValueFromGithub } from '../actions/index';
import { bindActionCreators } from 'redux';
import 'bootstrap'
import '../index.css'


class SearchBarFilterName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBarValue:'',
      matchingValue:[]
    }
    this.renderSearchbarValue = this.renderSearchbarValue.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.submitValueToSearchBar = this.submitValueToSearchBar.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
 }

 componentDidMount() {
   this.props.renderGitHubData()
 }

  renderSearchbarValue(event) {
    this.setState({searchBarValue:event.target.value})
  }

  submitValueToSearchBar(list) {
    this.setState({searchBarValue:list, matchingValue:[]})
  }

  ShowList() {
    return _.map(this.state.matchingValue, (list,key) => {
      return (
        <li
          key={key}
          list={list}
          onClick={()=>this.submitValueToSearchBar(list)}>
          {list}
        </li>
      )
    })
  }

  onInputChange(event) {
    event.preventDefault();
    this.props.renderGitHubData(
      this.setState({
        searchBarValue:event.target.value,
        matchingValue: !_.isEmpty(this.props.activeProfileCard) ? this.props.activeProfileCard[0].filter(name => name.indexOf(event.target.value)!==-1):[]
        //matchingValue: !_.isEmpty(this.props.activeProfileCard) && this.props.activeProfileCard[0].filter(x => x.indexOf(event.target.value)!==-1):[]
    }));

    if(!event.target.value) {
      return this.setState({matchingValue:[]})
    }
  }

  onFormSubmit(event) {
    event.preventDefault()
    const SearchValue = this.state.searchBarValue

    if (SearchValue === ' ' || SearchValue ==='') {
       alert(`The SearchBar should not be Empty`)
     }
     else if ( SearchValue == this.props.activeProfileCard[0].filter(name => name === SearchValue)) {
        this.props.renderMatchedBarValueFromGithub(SearchValue)
        this.setState({searchBarValue:'',matchingValue:''})
      }
      else {
        alert(`Woops !! Sorry, no one called ${SearchValue} !`)
      }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Type Something"
          className="input-searchbar"
          value={this.state.searchBarValue}
          onChange={this.renderSearchbarValue}
          onInput={this.onInputChange}/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <ul>
          {this.ShowList()}
        </ul>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {activeProfileCard:state.activeProfileCard}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ renderGitHubData, renderMatchedBarValueFromGithub },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarFilterName);
