import { createSlice } from "@reduxjs/toolkit";

export interface Users {
    id?: string;
    name: string;
    age: number;
    career: string;
}

const init: Users[] = [];

const userSlice = createSlice({
    name: "users",
    initialState: init,
    reducers: {
        //Functions

        //Function that return users data
        getUsers: (_state, action) => { return action.payload },
        
        //To add users, using the push method
        addUsers: (state, action) => { 
            const { name, age, career } = action.payload;
            const repeatUser = state.find(value => value.name === name );

            if (repeatUser){
                alert("Can't repeat the user info");
            } else if (name === '' || age === '' || career === ''){
                return;
            } else {
                state.push(action.payload);
            }
        },

        // To delete users
        deleteUser: (state, action) => { 
            const { id } = action.payload;
            const index = state.findIndex(value => value.id === id);
            state.splice(index, 1);
        },

        // To update user's info
        updateUser: (state, action) => { 
            const { id } = action.payload;
            const existingUser = state.find(value => value.id === id);
        
            if (existingUser) {
                Object.assign(existingUser, action.payload);
            }
        }
    }
});

export const { getUsers, addUsers, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;