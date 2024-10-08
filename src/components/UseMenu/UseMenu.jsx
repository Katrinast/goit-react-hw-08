import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"
import css from "./UseMenu.module.css"

export default function UseMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  return (
    <div className={css.header}>
      <p>Welcome { user.name}</p>
      <button className={css.btn} onClick={() => dispatch(logout())} type="button"> Logout </button>
  </div>
)
}