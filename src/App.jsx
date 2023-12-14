import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import Layout from './Layout/Layout';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/search-page'
            element={<SearchPage />}
          />
        </Route>

        <Route
          path='/profile'
          element={<Profile />}
        />
      </Routes>
    </>
  );
}

export default App;
