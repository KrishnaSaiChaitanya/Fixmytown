import React from "react";

function Admin() {
  return (
    <div>
      <div className="grid grid-nogutter">
        <div
          className="col-12 h-5rem "
          style={{ backgroundColor: "skyblue" }}
        ></div>
        <div className="p-4">
          <h4 className="text-center">Welcome to Admin dasboard</h4>
          <div className="text-center flex justify-content-center mt-4">
            <p style={{ width: "40%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              obcaecati dolorem sequi autem eius eaque accusantium, cupiditate
              veritatis illum animi numquam perspiciatis laboriosam totam sint
              aut accusamus, maiores beatae. Laudantium?
            </p>
          </div>
        </div>
        <div className="col-12 justify-content-center">
          <img src="../images/admin.jpg" height={450} />
        </div>
      </div>
    </div>
  );
}

export default Admin;
