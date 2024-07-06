import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import S1 from "./Page/Section/S1"
import S2 from "./Page/Section/S2"
import S3 from "./Page/Section/S3"
import S4 from "./Page/Section/S4"
function App() {
  return (
    <Routes>
    <Route path="/" element=<Home/> />
    <Route path="/Section1" element=<S1/> />
    <Route path="/Section2" element=<S2/> />
    <Route path="/Section3" element=<S3/> />
    <Route path="/Section4" element=<S4/> />
    </Routes>
  )
}
export default App