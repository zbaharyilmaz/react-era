import UserProvider from "./context/UserProvider"
import GosterUsers from "./pages/GosterUsers"


const App = () => {


  return (
    <UserProvider>
    <GosterUsers/>
    </UserProvider>
  )
}

export default App
