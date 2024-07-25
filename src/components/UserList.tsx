import { useDispatch, useSelector } from "react-redux";
import { deleteUser, Users } from "../redux/slices/users.slice";
import DeleteIcon from '@mui/icons-material/Delete';
import { EditUserForm } from "./EditUserForm";
import { Card } from "../styles/styles";

export const UserList = () => { 
  const usersData = useSelector((state: { users: Users[] }) => state.users);

  const dispatch = useDispatch();

  //To delete an user
  const handleDelete = (values: Users) => {
    dispatch(deleteUser(values));
  }
  
  return (
    <section className="p-5 flex flex-wrap justify-center items-center">
      {usersData &&
        usersData.map((values: Users) => (
          <Card key={values.id}>
            <p className="mb-2"><strong>User: </strong> {values.name}</p>
            <p className="mb-2"><strong>Age: </strong> {values.age}</p>
            <p className="mb-5"><strong>Career: </strong> {values.career}</p>
            <DeleteIcon onClick={() => handleDelete(values)} className="hover:scale-75"/>
            <EditUserForm data={values}/>
          </Card>
        ))}
    
    </section>
  );
};
