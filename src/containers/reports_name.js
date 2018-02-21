import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderMatededReportURL } from '../actions/index'
import '../index.css';
import 'bootstrap';

class ReportsName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showURL:[]
    }
  }

  fetchURL(repolist) {
     this.props.renderMatededReportURL(repolist)
     this.setState({
       showURL: this.props.activeReportURL
    })
  }

  noneDisplayURL() {
    this.setState({showURL:[]})
  }

  renderReportsList() {
    const filterDuplicateReports = this.props.activeReportsName.filter((ele,index,array) => {
      return index == array.indexOf(ele);
    })
    return _.map(filterDuplicateReports, (repolist,key) => {
      if (key<5) {
        return (
          <li
            key={key}
            onMouseOver={() => this.fetchURL(repolist)}
            onMouseOut={() => this.noneDisplayURL()}>
            {repolist}
            <a href={this.props.activeReportURL}>{this.state.showURL[key]}</a>
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
