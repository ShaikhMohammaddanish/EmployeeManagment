import React from "react";
import { useDispatch } from "react-redux";
import { deleteEntry } from "../../../action";
import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Delete({ id, redirectTo }) {
  const navigate = useNavigate();

  const { confirm } = Modal;
  const dispatch = useDispatch();

  const showConfirm = () => {
    confirm({
      title: "Do you Want to delete these entry?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(deleteEntry(id));
        if(redirectTo){
          navigate(redirectTo)
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return <Button onClick={showConfirm}>Delete</Button>;
}

export default Delete;
