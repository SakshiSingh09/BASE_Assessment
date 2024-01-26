import { Routes, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import UserPage from './components/UserPage';
import NotFoundPage from './components/NotFoundPage';
import MainSection from './components/MainSection';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' exact element={<SignInPage />}/>
          <Route path='user-page' exact element={<UserPage />}>
              <Route path='not-found' element={<NotFoundPage />}/>
              <Route path='upload' element={<MainSection />}/>
          </Route>
       </Routes>
    </div>
  );
}

export default App;
