import React, { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";

import { Button } from "primereact/button";

function ZonalAdmin() {
  const [first, setFirst] = useState(0);
  const [value, setValue] = useState(true);
  useEffect(() => {}, []);
  const onPageChange = (event) => {
    setFirst(event.first);
  };
  const onUpload = (id) => {
    const file = document.getElementById(id);
    console.log(file);
    console.log(file.files[0]);
  };
  return (
    <div>
      <div
        className="grid grid-nogutter justify-content-center"
        style={{ paddingInline: "80px" }}
      >
        <div className="col-12 grid grid-nogutter p-3">
          <div className="col-4">
            <Button label="Sewage issues" outlined className="w-6" />
          </div>
          <div className="col-4">
            <Button label="Pothole issues" className="w-6" outlined />
          </div>
          <div className="col-4">
            <Button label="Litter issues" className="w-6" outlined />
          </div>
        </div>
        <div
          className="col-12 grid grid-nogutter m-5"
          style={{
            paddingInline: "30px",
            margin: "20px",
            border: "1px dotted black",
            padding: "20px 20px",
          }}
        >
          <div className="col-1 flex align-items-center justify-content-center">
            <TriStateCheckbox
              value={value}
              onChange={(e) => setValue(e.value)}
            />
          </div>
          <div className="col-4 align-items-center flex justify-content-center">
            <img src="../images/waste.png" height={90} />
          </div>
          <div className="col-6">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam suscipit, similique voluptatibus, ratione totam aliquid
              repellat consequuntur, accusantium maxime quam repudiandae?
              Repellendus cumque ipsum fugit dolore quod vitae hic quibusdam.
            </p>
            <p>
              <button
                class="btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="pi pi-angle-down"></i>
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Upload File here ..
                  </label>
                  <input class="form-control" type="file" id="formFile" />
                  <div className="p-3">
                    <Button
                      label="Accept"
                      severity="success"
                      outlined
                      onClick={() => {
                        onUpload("formFile");
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <Button label="Reject" severity="danger" outlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 grid grid-nogutter m-5"
          style={{
            paddingInline: "30px",
            margin: "20px",
            border: "1px dotted black",
            padding: "20px 20px",
          }}
        >
          <div className="col-1 flex align-items-center justify-content-center">
            <TriStateCheckbox
              value={value}
              onChange={(e) => setValue(e.value)}
            />
          </div>
          <div className="col-4 align-items-center flex justify-content-center">
            <img src="../images/waste.png" height={90} />
          </div>
          <div className="col-6">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam suscipit, similique voluptatibus, ratione totam aliquid
              repellat consequuntur, accusantium maxime quam repudiandae?
              Repellendus cumque ipsum fugit dolore quod vitae hic quibusdam.
            </p>
            <p>
              <button
                class="btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                <i className="pi pi-angle-down"></i>
              </button>
            </p>
            <div class="collapse" id="collapseExample1">
              <div class="card card-body">
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Upload File here ..
                  </label>
                  <input class="form-control" type="file" id="formFile1" />
                  <div className="p-3">
                    <Button
                      label="Accept"
                      severity="success"
                      outlined
                      onClick={() => {
                        onUpload("formFile1");
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <Button label="Reject" severity="danger" outlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <img src="../images/waste.png" height={90} />
        </div>
        <div className="col-12">
          <img src="../images/waste.png" height={90} />
        </div>
      </div>
      <div className="p-3">
        <Paginator
          first={first}
          rows={10}
          totalRecords={50}
          onPageChange={onPageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
        />
      </div>
    </div>
  );
}

export default ZonalAdmin;
