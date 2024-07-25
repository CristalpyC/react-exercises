import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { updateUser, Users } from "../redux/slices/users.slice";
import { FC } from "react";
import { useUpdating } from "../hooks/useUpdating";
import EditIcon from "@mui/icons-material/Edit";

interface EditInterface {
  data: Users;
}

export const EditUserForm: FC<EditInterface> = ({ data }) => {
  const dispatch = useDispatch();
  const [isUpdating, showUpdatingForm, showNotUpdatingForm] = useUpdating();
  const style = "mb-2 p-1 shadow-xl rounded-sm";

  return (
    <Formik
      initialValues={{ ...data }}
      onSubmit={(values) => {
        showNotUpdatingForm();
        dispatch(updateUser(values));
      }}
    >
      {isUpdating ? (
        <Form className="text-gray-800 p-3 flex flex-col">
          <Field className={style} placeholder="Name" type="text" name="name" />
          <Field className={style} placeholder="Age" type="number" name="age" />
          <Field
            className={style}
            placeholder="Career"
            type="text"
            name="career"
          />
          <button
            type="submit"
            className="text-white bg-blue-800 p-[2] hover:bg-blue-900"
          >
            Edit user
          </button>
        </Form>
      ) : (
        <EditIcon onClick={showUpdatingForm} className="hover:scale-75" />
      )}
    </Formik>
  );
};
