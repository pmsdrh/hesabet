import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const Register = () => {
  const onFinish = (values) => {

  };
  return (
    <Form
      name="registerForm"
      className="register-form"
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
        name="email"

        rules={[
          {
            required: true,
            message: 'لطفا ایمیل معتبر وارد کنید!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} type="email" placeholder="ایمیل" />
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
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="passwordReply"
        rules={[
          {
            required: true,
            message: 'پسورد اجباری است!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="تکرار رمز عبور"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          ثبت نام
        </Button>
        و یا <a href="">وارد شوید!</a>
      </Form.Item>
    </Form>
  )
}

export default Register
