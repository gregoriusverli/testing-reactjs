import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { fetchData } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();

  const { dataJSON, loading } = useSelector((reducer) => reducer);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (dataJSON) {
    return (
      <>
        <div>
          <h1 className="text-center">Test Majapahit</h1>
        </div>
        <div className="justify-content-center d-flex flex-row flex-wrap bd-highlight mb-3">
          {dataJSON.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
      </>
    );
  } else {
    return <Card />;
  }
}
