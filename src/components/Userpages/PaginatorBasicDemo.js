import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { CustomerService } from "./service/CustomerService";

export default function PaginatorBasicDemo() {
    // fetch data and set in customers
    // push data from onClick button 
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('').then(res=>res.json()).then(data=>setCustomers(data))
    // CustomerService.getCustomersMedium().then((data) => setCustomers(data));
  }, []);

  function handleRereport(){

  }

  function actionTemplate(rowData, column) {
    // console.log("column", column);
    // console.log("rowData", rowData);
    return (
        <button
          type="button"
          icon="fa-search"
          className="btn btn-danger"
          onClick={handleRereport}
        >
            Report
        </button>
    );
  }

  return (
    <div className="card">
      <DataTable
        value={customers}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          header="Problem Type"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="country.name"
          header="Location"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="company"
          header="Problem Status"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="representative.name"
          header="Rereport"
          style={{ width: "25%" }}
          body={actionTemplate}
        ></Column>
      </DataTable>
    </div>
  );
}
