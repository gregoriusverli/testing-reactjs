import React from "react";

export default function Card({ data }) {
  return (
    <div className="m-2 card bg-primary" style={{ width: "18rem" }}>
      <div className="card-body ">
        <div className="bg-dark rounded">
          <h5 className="m-1 card-title text-white text-center ">
            {data.title}
          </h5>
        </div>
        <div className="bg-light rounded">
          <p className="m-1 card-text">{data.body}</p>
        </div>
      </div>
    </div>
  );
}
