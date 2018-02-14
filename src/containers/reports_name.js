import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderMatededReportURL } from '../actions/index'
import '../index.css';
import 'bootstrap';

class ReportsName extends Component {
  constructor(props){
    super(props)

    this.state = {
      showURL:[]
    }
  }
  fetchURL(repolist) {
     this.props.renderMatededReportURL(repolist)
     this.setState({showURL:this.props.activeReportURL})
  }

  renderReportsList() {
    return _.map(this.props.activeReportsName, (repolist,key) => {
      if (key<5) {
        return (
          <li
            key={key}
            onClick={() => this.fetchURL(repolist)}>
            {repolist}
            {this.state.showURL[key]}
          </li>
        );
      }}
    );
  }

  render() {
    return (
      <ul>
          {this.renderReportsList()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ renderMatededReportURL }, dispatch);
}


function mapStateToProps({ activeReportsName, activeReportURL }) {
  return { activeReportsName, activeReportURL };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsName);
