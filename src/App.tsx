import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import FirstPage from './ui/pages/first-page/FirstPage';
import SecondPage from './ui/pages/second-page/SecondPage';

function App() {
    
    return (
        <div className="App">
            <BrowserRouter>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}>
                    <li>
                        <Link to="/first-page">First Page</Link>
                    </li>

                    <li>
                        <Link to="/second-page">Second Page</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="first-page" element={<FirstPage />}></Route>
                    <Route path="second-page" element={<SecondPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
