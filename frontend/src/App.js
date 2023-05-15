import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";

// Local imports
import './app.scss';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Network from "./pages/mynetwork/Network";
import Jobs from "./pages/jobs/Jobs";
import Message from "./pages/messages/Message";
import Profile from "./pages/profile/Profile";
import NetworkRight from "./pages/mynetwork/right/NetworkRight";
import UserConnections from "./pages/mynetwork/right/showConnections/UserConnections";

import { checkLocalStorage } from "./app/actions/checkLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App(props) {
  // Redux Dispatch
  const dispatch = useDispatch();
  // Check if user is logged in
  
  let localStorageAction = checkLocalStorage();
  
  const isAuthenticated = localStorageAction.isAuthenticated;

  dispatch(localStorageAction);

  let authUser = useSelector(state=>state.auth.user);

  // const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!authUser.isAuthenticated){
  //     navigate('/signin');
  //   }
  // },[authUser])
  return (
    
      <div className="app">
        <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
          {isAuthenticated && <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="mynetwork" element={<Network/>}>
              <Route index element={<NetworkRight/>}/>
              <Route path="connections" element={<UserConnections/>}/>
            </Route>
            <Route path="jobs" element={<Jobs/>}/>
            <Route path="message" element={<Message/>}>
              <Route index element={<Message/>}/>
              <Route path=":id" element={<Message/>}/>
            </Route>
            <Route path="notification" element={<Message/>}/>
            <Route path=":userId" element={<Profile/>}/> 
          </Route>}
        </Routes>
      </div>
    
  );
}

// const mapStateToProp = (state)=>{
//   return {state};
// };

// const mapDispatchToProp = (dispatch)=>{
//   return {dispatch};
// }

// export default connect(mapStateToProp,mapDispatchToProp)(App);
export default App;
