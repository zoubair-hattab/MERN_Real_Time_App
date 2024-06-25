import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './page/UserPage.jsx';
import PostPage from './page/PostPage.jsx';

import Header from './components/Header.jsx';
import { Toaster } from 'react-hot-toast';
import HomePage from './page/HomePage.jsx';
import LoginPage from './page/LoginPage.jsx';
import SignUpPage from './page/SignUpPage.jsx';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/userAction.js';
import { useDispatch } from 'react-redux';
import IsNotAuth from './components/protectedRouter/IsNotAuth.jsx';
import IsAuth from './components/protectedRouter/IsAuth.jsx';
import ProfilePage from './page/ProfilePage.jsx';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      dispatch(loadUser());
    };
    loadData();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<IsNotAuth />}>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        <Route element={<IsAuth />}>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/:username/post/:pid" element={<PostPage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
