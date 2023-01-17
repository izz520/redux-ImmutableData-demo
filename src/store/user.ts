import { createSlice } from "@reduxjs/toolkit";
export interface IAccount {
    id: number;
    account: string;
}
interface IUserInfo {
    userInfo: {
        id: number;
        name: string;
        accounts: IAccount[]
    }
}

const initialState: IUserInfo = {
    userInfo: {
        id: 1,
        name: "name",
        accounts: [
            {
                id: 11,
                account: "123"
            },
            {
                id: 22,
                account: "456"
            },
        ]
    }
}

const UserSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        changeAccount1: (state, { payload }: { payload: string }) => {
            state.userInfo.accounts[1].account = payload
        },
        changeId: (state, { payload }: { payload: number }) => {
            state.userInfo.id = payload
        }
    }
})

export const { changeAccount1, changeId } = UserSlice.actions;
export default UserSlice.reducer