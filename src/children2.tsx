import React, { memo } from 'react';
import { IAccount } from './store/user';
export interface IInfo {
    id: number;
    name: string;
    accounts: IAccount[]
}
const Children2 = ({ userInfo }: { userInfo: IInfo }) => {
    console.log("useState子组件渲染");
    return (
        <div></div>
    )
}

export default memo(Children2);