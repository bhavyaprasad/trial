import React, { Component } from "react";
import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const bonds = [
  {
    bond_id: 1,
    issuer_name: "Item 1",
    trade_date: "abc-123",
    maturity_date: "xyz=123",
    bond_type: "daksh",
    status: "active",
    update: "google.com"
  },
  {
    bond_id: 2,
    issuer_name: "Item 2",
    trade_date: "abc-123",
    maturity_date: "xyz=123",
    bond_type: "daksh",
    status: "inactive",
    update: "google.com"
  }
];

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      // For displaying data
      columns: [
        {
          dataField: "bond_id",
          text: "Bond Id",
          sort: true
        },
        {
          dataField: "issuer_name",
          text: "Issuer Name",
          sort: true
        },
        {
          dataField: "trade_date",
          text: "Trade Date",
          sort: true
        },
        {
          dataField: "maturity_date",
          text: "Maturity Date",
          sort: true
        },
        {
          dataField: "bond_type",
          text: "Bond Type",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
          sort: true
        },
        {
          dataField: "follow",
          text: "Follow",
          formatter: this.linkFollow,
          sort: true
        }
      ],
      isFollow: true
    };

    this.onFollowChanged.bind(this);
  }

  onFollowChanged() {
    this.setState({ isFollow: !this.state.isFollow });
    console.log(this.state.isFollow);
  }

  linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return <Button onClick={() => alert("google.com")}>Update</Button>;
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1 className="h2">Bonds</h1>
        <BootstrapTable
          keyField="id"
          data={bonds}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Table />, rootElement);