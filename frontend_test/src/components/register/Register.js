import React from 'react'

import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../action";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Register() {



    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AuthData = useSelector((store) => store.auth);

  // redirect user after sucsessfull login
  useEffect(() => {
    if (AuthData.loading === false) {
      if (Object.keys(AuthData.data).length !== 0) {
        navigate("/home");
      }
    }
  }, [AuthData]);

  const onFinish = (values) => {
    dispatch(register(values, navigate));
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (








     
        <div className="center h100 colflex">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
    


            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
    

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {type: 'email',
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
          <Button>
            <Link to={"/"}>login Here!</Link>
          </Button>
        </div>
    
















  )
}

export default Register