import React from "react";
import { Button, Table } from "semantic-ui-react";

class Chart extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button color="red">Delete</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default Chart;

