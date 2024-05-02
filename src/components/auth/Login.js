import React, { useContext, useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup';
import * as AuthService from "../../services/AuthService"
import { AuthContext } from '../../context/AuthContext';
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
  const {saveUser} = useContext(AuthContext);
  const [haveErr, setHaveErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMess, setErrMess] = useState("");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const doLogin = async (data) => {
    let temp = await AuthService.login(data);
    return temp;
  };

  const validateUserYup = Yup.object().shape({
    username: Yup.string().required("Tên đăng nhập bắt buộc nhập!")
      .min(7, "Tên đăng nhập có ít nhất 7 kí tự"),
    password: Yup.string().required("Mật khẩu bắt buộc nhập!")
  });

  const doSubmit = async (values) => {
    let data = {...values};
    setIsLoading(true);
    let temp = await doLogin(data);
    if (temp.status !== 404){
      setHaveErr(false);
      saveUser(temp.data);
    } else {
      console.log(temp);
      setHaveErr(true);
      setErrMess(temp.data);
    };
    setIsLoading(false);
  }
  return (
    <>
     <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={validateUserYup}
      onSubmit={values => {
        doSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{width: "23rem"}}>
          <label htmlFor="username">Tên đăng nhập</label>
          <Field
            id="username"
            name="username"
            type="text"
            placeholder="Nhập tên đăng nhập"
          /><br/>
          {touched.username && errors.username && <div className='text-danger'>{errors.username}</div>}
          <label htmlFor="password">Mật khẩu</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
          /><br/>
          {touched.password && errors.password && <div className='text-danger'>{errors.password}</div>}
          <button type="submit">Đăng nhập</button>
          {haveErr && <div className='text-danger'>{errMess}</div>}
        </Form>
      )}
    </Formik>
    <ClipLoader color={"#ffffff"}  loading={isLoading} cssOverride={override}  size={500} aria-label="Loading Spinner"data-testid="loader"/>
    </>
  )
}
