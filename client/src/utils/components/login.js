import '../assets/styles/login.css'
import { LockOutlined, UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Switch, Form, Input } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      name="loginForm"
      className="login-form"
      initialValues={{
        remember: false,
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
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item> به خاطر بسپار
        <a className="login-form-forgot" href="register">
        فراموشی رمز عبور
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          ورود
        </Button>
        و یا <a href="">ثبت نام کنید.</a>
      </Form.Item>

    </Form>
  )
}

export default Login
