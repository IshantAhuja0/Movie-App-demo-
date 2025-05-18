import React from 'react';
import About from './Components/other comps/About';
import Home from './Components/other comps/Home';
import NotFound from './Components/other comps/NotFound';
import MoviePage from './Components/movie pages/MoviePage';
import ReactDOM from 'react-dom/client';
import App from './Components/main build in/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/moviepage" element={<MoviePage />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
      {/* <Route loader={githubData} path="/github" element={<Github/>} /> */}
    </Route>
  )
)
root.render(
  <RouterProvider router={router}>
  </RouterProvider>
);

reportWebVitals();
