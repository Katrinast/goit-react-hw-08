
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UseMenu from "../UseMenu/UseMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header>
      <Navigation />
      {isLoggedIn ?  <UseMenu/> : <AuthNav/>}
     
      
    </header>
  )
}