import { AddUserForm } from "./AddUserForm"
import { UserList } from "./UserList"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const Main = () => {
  return (
    <main className="mt-[3rem]">
      <h1 className="text-2xl mb-4 ">
        <AssignmentIndIcon className="mr-2 mb-2"/>
        User admin
      </h1>
      <AddUserForm />
      <UserList />
    </main>
  )
}
