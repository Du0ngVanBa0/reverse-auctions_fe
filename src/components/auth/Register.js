import React, { useContext, useState } from 'react';
import { Form, Field, Formik } from 'formik'
import * as Yup from "yup";
import * as AuthService from "../../services/AuthService"
import { AuthContext } from '../../context/AuthContext';

export default function Register() {
  const {saveUser} = useContext(AuthContext);
  const [haveErr, setHaveErr] = useState(false);
  const [errMess, setErrMess] = useState("");

  const doRegister = async (data) => {
    let temp = await AuthService.register(data);
    return temp;
  };

  const validateUserYup = Yup.object().shape({
    username: Yup.string().required("Tên đăng nhập bắt buộc nhập!")
      .min(7, "Tên đăng nhập có ít nhất 7 kí tự"),
    name: Yup.string().required("Tên hiển thị bắt buộc nhập!")
      .min(7, "Tên hiển thị có ít nhất 7 kí tự"),
    email: Yup.string().required("Email bắt buộc nhập!"),
    password: Yup.string().required("Mật khẩu bắt buộc nhập!"),
    confirmPassword: Yup.string()
          .required("Mật khẩu xác nhận bắt buộc nhập!")
          .oneOf([Yup.ref('password'), null],"Mật khẩu phải trùng khớp nhau!")
  });

  const doSubmit = async (values) => {
    let data = {...values};
    delete data.confirmPassword;
    let temp = await doRegister(data);
    if (temp.status !== 404){
      setHaveErr(false);
      saveUser(temp.data);
    } else {
      console.log(temp);
      setHaveErr(true);
      setErrMess(temp.data);
    }
  }
  return (
    <>
     <Formik
      initialValues={{
        username: "",
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validateUserYup}
      onSubmit={values => {
        doSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="username">Tên đăng nhập</label>
          <Field
            id="username"
            name="username"
            type="text"
            placeholder="Nhập tên đăng nhập"
          /><br/>
          {touched.username && errors.username && <div className='text-danger'>{errors.username}</div>}
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Nhập Email"
          /><br/>
          {touched.email && errors.email && <div className='text-danger'>{errors.email}</div>}
          <label htmlFor="name">Tên hiển thị</label>
          <Field
            id="name"
            name="name"
            type="text"
            placeholder="Nhập tên hiển thị"
          /><br/>
          {touched.name && errors.name && <div className='text-danger'>{errors.name}</div>}
          <label htmlFor="password">Mật khẩu</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
          /><br/>
          {touched.password && errors.password && <div className='text-danger'>{errors.password}</div>}
          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu"
          /><br/>
          {touched.confirmPassword && errors.confirmPassword && <div className='text-danger'>{errors.confirmPassword}</div>}
          <button type="submit">Đăng kí</button>
          {haveErr && <div className='text-danger'>{errMess}</div>}
        </Form>
      )}
    </Formik>
    </>
  )
}
