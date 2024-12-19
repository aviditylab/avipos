import Dashboard from "./Dashboard"
import GettingStarted from "./GettingStarted"
import { useAppSelector } from "./hooks"

function App() {
  const isGettingStartedState = useAppSelector(state => state.gettingStarted.isGettingStarted);

  if (isGettingStartedState)
    return <Dashboard />
  else
    return <GettingStarted />
}


export default App
