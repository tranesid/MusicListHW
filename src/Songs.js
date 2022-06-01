import React from "react";
import { Table } from "semantic-ui-react";
import Chart from "./Table";

class Songs extends React.Component {

  
  renderSongs=()=>{
      return this.props.songs.map(s=> <Chart key={s.id} {...s} />)
  }
  render() {

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {this.renderSongs()}
        </Table.Body>
      </Table>
    );
  }
}

export default Songs;


