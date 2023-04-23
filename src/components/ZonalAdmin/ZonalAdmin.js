// import React, { useEffect, useState } from "react";
// import { Paginator } from "primereact/paginator";
// import { TriStateCheckbox } from "primereact/tristatecheckbox";
// import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";

// import { Button } from "primereact/button";

// function ZonalAdmin() {
//   const [first, setFirst] = useState(0);
//   const [value, setValue] = useState(true);
//   useEffect(() => {}, []);
//   const onPageChange = (event) => {
//     setFirst(event.first);
//   };
//   const onUpload = (id) => {
//     const file = document.getElementById(id);
//     console.log(file);
//     console.log(file.files[0]);
//   };
//   return (
//     <div>
//       <div
//         className="grid grid-nogutter justify-content-center"
//         style={{ paddingInline: "80px" }}
//       >
//         <div className="col-12 grid grid-nogutter p-3">
//           <div className="col-4">
//             <Button label="Sewage issues" outlined className="w-6" />
//           </div>
//           <div className="col-4">
//             <Button label="Pothole issues" className="w-6" outlined />
//           </div>
//           <div className="col-4">
//             <Button label="Litter issues" className="w-6" outlined />
//           </div>
//         </div>
//         <div
//           className="col-12 grid grid-nogutter m-5"
//           style={{
//             paddingInline: "30px",
//             margin: "20px",
//             border: "1px dotted black",
//             padding: "20px 20px",
//           }}
//         >
//           <div className="col-1 flex align-items-center justify-content-center">
//             <TriStateCheckbox
//               value={value}
//               onChange={(e) => setValue(e.value)}
//             />
//           </div>
//           <div className="col-4 align-items-center flex justify-content-center">
//             <img src="../images/waste.png" height={90} />
//           </div>
//           <div className="col-6">
//             <p className="text-center">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Laboriosam suscipit, similique voluptatibus, ratione totam aliquid
//               repellat consequuntur, accusantium maxime quam repudiandae?
//               Repellendus cumque ipsum fugit dolore quod vitae hic quibusdam.
//             </p>
//             <p>
//               <button
//                 class="btn"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseExample"
//                 aria-expanded="false"
//                 aria-controls="collapseExample"
//               >
//                 <i className="pi pi-angle-down"></i>
//               </button>
//             </p>
//             <div class="collapse" id="collapseExample">
//               <div class="card card-body">
//                 <div class="mb-3">
//                   <label for="formFile" class="form-label">
//                     Upload File here ..
//                   </label>
//                   <input class="form-control" type="file" id="formFile" />
//                   <div className="p-3">
//                     <Button
//                       label="Accept"
//                       severity="success"
//                       outlined
//                       onClick={() => {
//                         onUpload("formFile");
//                       }}
//                     />
//                   </div>
//                   <div className="p-3">
//                     <Button label="Reject" severity="danger" outlined />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="col-12 grid grid-nogutter m-5"
//           style={{
//             paddingInline: "30px",
//             margin: "20px",
//             border: "1px dotted black",
//             padding: "20px 20px",
//           }}
//         >
//           <div className="col-1 flex align-items-center justify-content-center">
//             <TriStateCheckbox
//               value={value}
//               onChange={(e) => setValue(e.value)}
//             />
//           </div>
//           <div className="col-4 align-items-center flex justify-content-center">
//             <img src="../images/waste.png" height={90} />
//           </div>
//           <div className="col-6">
//             <p className="text-center">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Laboriosam suscipit, similique voluptatibus, ratione totam aliquid
//               repellat consequuntur, accusantium maxime quam repudiandae?
//               Repellendus cumque ipsum fugit dolore quod vitae hic quibusdam.
//             </p>
//             <p>
//               <button
//                 class="btn"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseExample1"
//                 aria-expanded="false"
//                 aria-controls="collapseExample1"
//               >
//                 <i className="pi pi-angle-down"></i>
//               </button>
//             </p>
//             <div class="collapse" id="collapseExample1">
//               <div class="card card-body">
//                 <div class="mb-3">
//                   <label for="formFile" class="form-label">
//                     Upload File here ..
//                   </label>
//                   <input class="form-control" type="file" id="formFile1" />
//                   <div className="p-3">
//                     <Button
//                       label="Accept"
//                       severity="success"
//                       outlined
//                       onClick={() => {
//                         onUpload("formFile1");
//                       }}
//                     />
//                   </div>
//                   <div className="p-3">
//                     <Button label="Reject" severity="danger" outlined />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-12">
//           <img src="../images/waste.png" height={90} />
//         </div>
//         <div className="col-12">
//           <img src="../images/waste.png" height={90} />
//         </div>
//       </div>
//       <div className="p-3">
//         <Paginator
//           first={first}
//           rows={10}
//           totalRecords={50}
//           onPageChange={onPageChange}
//           template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
//         />
//       </div>
//     </div>
//   );
// }

// export default ZonalAdmin;

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Divider } from "primereact/divider";
import logo from "../../logo.svg";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Link } from "react-router-dom";

export default function ZonalAdmin() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reports/zonalReports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM4YzdmM2U3ODUxZTNlN2NmMTExNCIsImlhdCI6MTY4MjE0ODU3MX0.NMgOyTyWkfMIRmOMFMa_r-CTcbfcriyqPCNPRfWHYn0`,
      },
      body: JSON.stringify({
        location: { lat: 26.799594133401428, long: 81.00983287128457 },
        radius: 1.2,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        console.log(data);
      });
  }, []);

  const handelreport = (par) => {
    console.log(par);

  };
  function actionTemplate(rowData, column) {
    // console.log("column", column);
    // console.log("rowData", rowData);
    return (
      <>
        {/* <Button
        className="w-28"
        label="Report"
        rounded
        onClick={() => handelreport(rowData._id)}
      /> */}
        <Button
          className="btn w-28"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseExample${rowData._id}`}
          aria-expanded="false"
          aria-controls="collapseExample"
          label="Report"
          rounded
        />
        <div class="collapse my-3" id={`collapseExample${rowData._id}`}>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload File here ..
              </label>
              <input type="file" id="formFile" className="my-2"/>
              <button className="btn btn-primary">submit</button>
            </div>
          </div>
      </>
    );
  }
  const statusBodyTemplate = (product) => {
    return <Tag value={product.status} severity={getSeverity(product)}></Tag>;
  };
  const imgTemplate = (product) => {
    return (
      <img
        className="flex justify-content-center"
        src={product.reporturl}
        alt="img"
        style={{ height: "10vh" }}
      />
    );
  };

  const getSeverity = (product) => {
    switch (product.status) {
      case "Resolved":
        return "success";

      case "Pending":
        return "warning";

      case "Reported":
        return "danger";

      default:
        return null;
    }
  };
  function Mapbutton(rowData, column) {
    // console.log("column", column);
    // console.log("rowData", rowData);
    return (
      <Button
        icon="pi pi-map-marker"
        rounded
        size="lg"
        text
        onClick={() => handelreport(rowData._id)}
      />
    );
  }

  return (
    <>
      <nav
        className="md:px-14 px-4 nav-clr mx-auto flex items-center md:flex justify-between sticky top-0"
        style={{ height: "15vh" }}
      >
        <img src={logo} style={{ height: "100px" }} />
        <h4 className="p-2">Fix my Town</h4>
        <div className="block md:hidden">
          <button className="custom-img"></button>
        </div>
        <ul className="custom-nav">
          {/* <li className="px-2 cursor-pointer text-gray-600">Home</li>
          <li className="px-2 cursor-pointer text-gray-600">Careers</li>
          <li className="px-2 cursor-pointer text-gray-600">About Us</li> */}
          <li className="px-2 w-32 py-2 button-clr-primary rounded-lg text-center font-medium">
            <button>
              <Link
                to="/register"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Logout
              </Link>
            </button>
          </li>
        </ul>
      </nav>

      <div className="col-12">
        <h3 className="text-center">Past Reports</h3>
      </div>
      <div className="col-12 " style={{ padding: "90px", paddingTop: "30px" }}>
        <DataTable
          value={customers}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="cat"
            header="Problem Type"
            style={{ width: "25%" }}
          ></Column>
          <Column
            header="Image"
            body={imgTemplate}
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="reporturl"
            header="Location"
            body={Mapbutton}
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="company"
            header="Problem Status"
            style={{ width: "25%" }}
            body={statusBodyTemplate}
          ></Column>
          <Column
            field="representative.name"
            header="Rereport"
            style={{ width: "25%" }}
            body={actionTemplate}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
