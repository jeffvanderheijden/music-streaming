import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Layout';
import SongList from './Components/Songs/SongList/SongList';
import AlbumList from './Components/Albums/AlbumList/AlbumList';
import ArtistList from './Components/Artists/ArtistList/ArtistList';

// This is React's router.
// You can define different url "paths" 
// and render corresponding components when a user requests those urls
// https://reactrouter.com/en/main/router-components/browser-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><SongList /></Layout>,
  },
  {
    path: "/songs",
    element: <Layout><SongList /></Layout>,
  },
  {
    path: "/albums",
    element: <Layout><AlbumList /></Layout>,
  },
  {
    path: "/artists",
    element: <Layout><ArtistList /></Layout>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
