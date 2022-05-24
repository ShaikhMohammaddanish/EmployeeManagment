import React, { useState } from "react";
import { Modal } from "antd";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { createEntry, editEnry } from "../../../../action";

function CreateEdit({ Buttontext, data }) {
    const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    if (data === undefined) {
        // creating new
        dispatch(createEntry(values))
      console.log("createnew", values);
    }else{
        dispatch(editEnry(data.id, values))

    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button className="createEditbtn" type="primary" onClick={showModal}>
        {Buttontext}
      </Button>
      <Modal title={Buttontext} visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={data}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                type:'email',
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="department"
            name="department"
            rules={[
              {
                required: true,
                message: "Please input your department!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="designation"
            name="designation"
            rules={[
              {
                required: true,
                message: "Please input your designation!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber min={18} />
          </Form.Item>

          <Form.Item
            label="salary"
            name="salary"
            rules={[
              {
                required: true,
                message: "Please input your salary!",
              },
            ]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateEdit;
