import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './page/UserPage.jsx';
import PostPage from './page/PostPage.jsx';

import Header from './components/Header.jsx';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
