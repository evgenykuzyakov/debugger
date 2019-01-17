import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactTable from "react-table";
import {
  Header,
  Segment,
} from 'semantic-ui-react'

import "react-table/react-table.css";

import './App.css';

import { listBlocks } from './api'

export class BlockTable extends React.Component {
  static propTypes = {
    blocks: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ReactTable
        data={Object.values(this.props.blocks)}
        columns={[
          {
            Header: 'Height',
            accessor: 'height',
            sortable: false,
            maxWidth: 100,
          },
          {
            Header: 'Transactions',
            accessor: 'num_transactions',
            maxWidth: 100,
          },
        ]}
        showPagination={false}
        className='-striped -highlight'
        minRows={1}
      />
    )
  }
}

class App extends React.Component {
  state = {
    blocks: [],
  }

  componentWillMount() {
    listBlocks().then(response => {
      this.setState({ blocks: response.data })
    }).catch((error) => {
      this.props.history.push({
        pathname: `/error`,
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Segment>
          <Header>Blocks</Header>
          <BlockTable
            blocks={this.state.blocks}
          />
        </Segment>
      </React.Fragment>
    )
  }
}

export const AppWithRouter = withRouter(App)
