import React, { useContext, useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import * as RoomService from "../../services/RoomService";
import { AuthContext } from '../../context/AuthContext';

export default function Auction() {
  const [isLoading, setIsLoading] = useState(false);
  const {token} = useContext(AuthContext);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const doChat = async (data) => {
    await RoomService.chat(data, token);
  };

  const validateUserYup = Yup.object().shape({
    chatTxt: Yup.string().required("bắt buộc nhập!")
  });

  const doSubmit = async (values) => {
    let data = {...values};
    setIsLoading(true);
    await doChat(data);
    setIsLoading(false);
  }; 
  return (
    <>
     <Formik
      initialValues={{
        chatTxt: ""
      }}
      validationSchema={validateUserYup}
      onSubmit={values => {
        doSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{width: "23rem"}}>
          <Field
            id="chat-txt"
            name="chatTxt"
            placeholder="Nhập de chat"
          /><br/>
          {touched.chatTxt && errors.chatTxt && <div className='text-danger'>{errors.chatTxt}</div>}
          <button type="submit">Gui</button>
        </Form>
      )}
    </Formik>
    <ClipLoader color={"#ffffff"}  loading={isLoading} cssOverride={override}  size={500} aria-label="Loading Spinner"data-testid="loader"/>
    </>
  )
}
