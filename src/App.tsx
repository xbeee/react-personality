import Header from "./Bars/Header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TestPage from "./pages/TestPage/TestPage";

function App() {
    return (
        <>
            <Header/>
            <main className={"flex-grow-1"}>
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage/>}/>
                        <Route path='/test/:id' element={<TestPage />}/>
                    </Route>
                </Routes>
            </main>
        </>
    );
}

export default App;