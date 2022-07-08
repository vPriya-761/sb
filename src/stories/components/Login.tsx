import 'antd/dist/antd.css';
import './login.css';

import { Button, Divider, Form, Input } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';

const Login = (p: any) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className="title">LOGIN</div>
        <Form.Item
          name="email id"
          rules={[
            {
              required: true,
              message: 'Please input your Email Address!',
            },
          ]}
        >
          <Input className="input" type="email" placeholder="E-mail address" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            className="input"
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="login-form-button" block>
            LogIn Now
          </Button>
        </Form.Item>
        <Form.Item>
          <span className="signup">Dont you remember your password?</span>

          <Divider plain> or </Divider>
          <span className="connect">
            <FacebookOutlined className="facebook" />
            <span className="connect">Connect with Facebook </span>
          </span>
          <Divider style={{ backgroundColor: '#f7f5f4' }} />
          <span className="signup">
            Dont you have an account? <span className="sign"> Sign Up</span>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
