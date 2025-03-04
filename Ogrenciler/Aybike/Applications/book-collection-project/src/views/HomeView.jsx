import AdminButton from '../components/AdminButton'
import { useUser } from '../context/UserContext'
import { useTheme } from "../context/ThemeContext";
import ThemeButton from '../components/ThemeButton';


const HomeView = () => {

const {theme} = useTheme()
const {user} = useUser()
  return (
    <div>
    <div className={`app ${theme}`}>
    <AdminButton/>
    <ThemeButton/>
    <p>Aktif Kullanıcı: {user }</p>
    </div></div>
  )
}

export default HomeView