import { useSelector } from "react-redux";
// Local Imports
import "./home.scss";
import LeftMain from './left/LeftMain';
import RightMain from './right/RightMain';
import CenterMain from './center/CenterMain';

function Main() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className='main'>
      <LeftMain/>
      <CenterMain/>
      <RightMain/>
    </div>
  )
}

export default Main
