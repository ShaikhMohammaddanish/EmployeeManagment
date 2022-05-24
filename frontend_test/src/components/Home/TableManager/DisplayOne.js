import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne, getAll } from "../../../action";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../reuseables/Header";
import Delete from "./Delete";
import {  Button } from 'antd';

function DisplayOne() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/employee/${id}/`)
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(data).map((value, index) => {
            return (
              <tr>
                <td>{value}</td>
                <td>{data[value]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
         
      <Delete id={id} redirectTo='/home' />
    </>
  );
}

export default DisplayOne;
