import React, { useContext, useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup';
import * as AuthService from "../../../services/AuthService";
import { AuthContext } from '../../../context/AuthContext';
import ClipLoader from "react-spinners/ClipLoader";
import '../css/Head.css'

function LoginForm({ onClose }) {
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
        onClose();
      } else {
        console.log(temp);
        setHaveErr(true);
        setErrMess(temp.data);
      };
      setIsLoading(false);
    }
    return (
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
                 <div className="login-form-container">
                    <div className="login-form">
                        <Form style={{width: "23rem"}}>
                        <div className='tieude'>Tên đăng nhập </div>
                        <Field
                            id="username"
                            name="username"
                            type="text"
                            /><br/>
                            {touched.username && errors.username && <div className='text-danger'>{errors.username}</div>}
                        <div className='tieude'>Mật khẩu</div>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            /><br/>
                            {touched.password && errors.password && <div className='text-danger'>{errors.password}</div>}
                            <div className='aa'><a>Quên mật khẩu</a></div>
                            <button type='submit'>Đăng nhập</button>
                            {haveErr && <div className='text-danger'>{errMess}</div>}
                        </Form>
                        <span className="close-button" onClick={onClose}>X</span>
                    <ClipLoader color={"#ffffff"}  loading={isLoading} cssOverride={override}  size={200} aria-label="Loading Spinner"data-testid="loader"/>
                     </div>
                  </div>)}
            </Formik>
    )
}

export default LoginForm;
