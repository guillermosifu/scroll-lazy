import{Routes,Route} from"react-router-dom"
import { DragonBall } from "../Components/DragonBall"
import App from "../App"

export const Rutas=()=>{
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/dragon" element={<DragonBall/>}/>

        </Routes>
    )
}