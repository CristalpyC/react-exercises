import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUsers } from "../redux/slices/users.slice";

export const AddUserForm = () => {
  const dispatch = useDispatch();
  const style = 'mb-4 p-2 rounded-sm outline-none transition-transform duration-[2s] ease-in-out transform hover:scale-95'

  return (
    <Formik
      initialValues={{ name: "", age: "", career: ""}}
      onSubmit={(values, { resetForm }) => {
        const userId = uuidv4();
        const user = {  id: userId, ...values }
        dispatch(addUsers(user));
        resetForm();
      }}
    >
      <Form className="text-gray-800 flex flex-col mb-[2rem] shadow-2xl p-5">
        <Field className={style} placeholder="Name" type="text" name="name"/>
        <Field className={style} placeholder="Age" type="number" name="age"/>
        <Field className={style} placeholder="Career" type="text" name="career"/>
        <button type="submit" className="bg-blue-900 hover:bg-blue-800 p-2 rounded-sm text-white">Add user</button>
      </Form>
    </Formik>
  )
}
