import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../action";
import { Link } from "react-router-dom";
import CreateEdit from "./CreateEdit/CreateEdit";
import Delete from "./Delete";
import { Empty, Button } from "antd";
import Loader from "../../reuseables/Loader";

const DisplayAlldata = () => {
  const dispatch = useDispatch();
  const documentData = useSelector((store) => store.document);

  // documentData.data.results
  useEffect(() => {
    dispatch(getAll(1));
  }, []);

  const updateData = (pageUrl) => {
    const pageNumber = new URL(pageUrl).searchParams.get("page");
    if (pageNumber === null) {
      dispatch(getAll(1));
      return;
    }
    dispatch(getAll(pageNumber));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        disableFilters: true,
        sticky: "left",
      },
      {
        Header: "Name",
        accessor: "name",
        sticky: "left",
      },
      {
        Header: "Email Id",
        accessor: "email",
        sticky: "left",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Designation",
        accessor: "designation",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
    ],
    []
  );

  let data = documentData.data.results ? documentData.data.results : [];

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable(
    {
      columns: columns,
      data,
    },
    useSortBy
  );

  return (
    <>
      {documentData.loading ? (
        <Loader />
      ) : (
        <>
          <CreateEdit Buttontext="Add new entry" />

          {data.length === 0 ? (
            <Empty />
          ) : (
            <>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render("Header")}

                          <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    // console.log('row', row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell, index) => {
                          return <td {...cell.getCellProps()}>{(index === 0) | (index === 1) ? <Link to={`${row.original.id}`}> {cell.render("Cell")} </Link> : cell.render("Cell")}</td>;
                        })}

                        <td>
                          <CreateEdit Buttontext="Edit Data" data={row.original} />

                          <Delete id={row.original.id} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="Buttongroup">
                <Button
                  onClick={() => {
                    updateData(documentData.data.previous);
                  }}
                  disabled={documentData.data.previous === null}
                >
                  previous
                </Button>
                <Button
                  onClick={() => {
                    updateData(documentData.data.next);
                  }}
                  disabled={documentData.data.next === null}
                >
                  next
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DisplayAlldata;
