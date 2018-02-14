
import React, { Component } from 'react';
import SearchBarFilterName from '../containers/searchbar_filter_name';
import ReportsName from '../containers/reports_name';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarFilterName />
        <ReportsName />
      </div>
    );
  }
}
