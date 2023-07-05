import './App.css';
import { UpNum } from './Redux/Redux-counter';
import ComponentsThunk from './Redux/ReduxThunkTK/componentsThunk';
import FileCha, { Cha2 } from './Redux/prop/FileCha';
import Reduxcorecount from './Redux/reduxcorecount';

import Thunkcount from './Redux/thunkcount';

function App() {
    return (
        <>
            {/* <UpNum />
            <FileCha />
            <Cha2 />
            <Thunkcount />
            <Reduxcore />
            <Reduxcorecount /> */}
            <ComponentsThunk />
        </>
    );
}

export default App;
