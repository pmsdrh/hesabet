import '../assets/styles/login.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const Login = () => {
  const onFinish = (values) => {

  };
  return (
    <Form
      name="loginForm"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'لطفا نام کاربری خود را وارد کنید!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="نام کاربری" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'پسورد اجباری است!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" >
        <Checkbox>مرا بخاطر بسپار</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          ورود
        </Button>
        و یا <a href="">ثبت نام کنید.</a>
      </Form.Item>
        <a className="login-form-forgot" href="register">
        فراموشی رمز عبور
        </a>
    </Form>
  )
}

export default Login
