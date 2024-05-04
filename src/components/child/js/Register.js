import '../css/Head.css'
import React, { useContext, useState } from 'react';
import { Form, Field, Formik } from 'formik'
import * as Yup from "yup";
import * as AuthService from "../../../services/AuthService"
import { AuthContext } from '../../../context/AuthContext';

function Register({ onClose }) {
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
            onClose();
        } else {
            setHaveErr(true);
            setErrMess(temp.data);
        }
    }
    return (
        <div className="login-form-container2">
            <div className="login-form">
                <span className="close-button" onClick={onClose}>X</span>
                <Formik
                initialValues={{
                    username: "",
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
                        <label htmlFor="username" className='tieude'>Tên đăng nhập</label>
                        <Field
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                        /><br/>
                        {touched.username && errors.username && <div className='text-danger'>{errors.username}</div>}
                        <label htmlFor="name" className='tieude'>Tên hiển thị</label>
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nhập tên hiển thị"
                        /><br/>
                        {touched.name && errors.name && <div className='text-danger'>{errors.name}</div>}
                        <label htmlFor="password" className='tieude'>Mật khẩu</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                        /><br/>
                        {touched.password && errors.password && <div className='text-danger'>{errors.password}</div>}
                        <label htmlFor="confirmPassword" className='tieude'>Xác nhận mật khẩu</label>
                        <Field
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                        /><br/>
                        {touched.confirmPassword && errors.confirmPassword && <div className='text-danger'>{errors.confirmPassword}</div>}
                        <div className='aa'><a className='text-primary'>Điều khoản sử dụng</a></div>
                        <button type="submit">Đăng kí</button>
                        {haveErr && <div className='text-danger'>{errMess}</div>}
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
