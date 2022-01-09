import './App.css';
import Main from './components/Main/Main';
import UserData from './components/Data/UserData/UserData';
import GroupData from './components/Data/GroupData/GroupData';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Main />
        <div className='main_table'>
          <Routes>
            <Route path="/users" element={<UserData />} />
            {/* <GroupData /> */}
            <Route path="/groups" element={<GroupData />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>

      );
}

      export default App;
