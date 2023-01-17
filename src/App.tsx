import { useState } from 'react';
import './App.css'
import Children, { IInfo } from './children';
import Children2 from './children2';
import { useAppDispatch, useAppSelector } from './store/hook'
import { changeAccount1, changeId } from './store/user';
function App() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(state => state.user.userInfo);
  const [info, setInfo] = useState<IInfo>({
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
  })
  // 改变对象最外层
  const handlechangeId = (type: string) => {
    if (type === "redux") {
      dispatch(changeId(2))
    } else {
      setInfo({ ...info, id: 2 })
    }
    console.log("调用");
  }
  // 改变对象里面的对象的属性
  const handleAccount = (type: string) => {
    if (type === "redux") {
      dispatch(changeAccount1("我是憨批"))
    } else {
      let obj = info;
      obj.accounts[1].account = "我是大憨批";

      // setInfo(obj)
      setInfo(JSON.parse(JSON.stringify(obj)))
    }
    console.log("改变account");

  }
  return (
    <div className="App">
      <div>-----------------redux---------------------</div>
      <div>{userInfo.id}</div>
      <div onClick={() => handlechangeId("redux")}>changeId</div>
      <Children userInfo={userInfo} />
      <div>账号1--{userInfo.accounts[1].account}</div>
      <div onClick={() => handleAccount("redux")}>changeAccount</div>
      <div>-----------------useState---------------------</div>
      <div>{info.id}</div>
      <div onClick={() => handlechangeId("useState")}>changeId</div>
      <Children2 userInfo={info} />
      <div>账号1--{info.accounts[1].account}</div>
      <div onClick={() => handleAccount("useState")}>changeAccount</div>
    </div>
  )
}

export default App
