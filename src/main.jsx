import React, { useContext, createContext } from 'react'
import App from './App'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import NotificationsPage from './components/NotificationsPage';
import Card from './components/Card';
import ReferenceDataContextProvider, { ReferenceDataContext } from './components/AppContextProvider';
// const { currComponent, setCurrComponent } = useContext(ReferenceDataContext)
//   console.log(currComponent)
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ReferenceDataContextProvider>
//       <App />
//     </ReferenceDataContextProvider>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/test",
//         element: <Card />,
//       },
//       {
//         path: "/project/:id",
//         element: <NotificationsPage />,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReferenceDataContextProvider>
      <App />
    </ReferenceDataContextProvider>
  </React.StrictMode >
)

  //   <Router>
  //       <div>
  //         {/* <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/about">About</Link>
  //           </li>
  //           <li>
  //             <Link to="/topics">Topics</Link>
  //           </li>
  //         </ul> */}

  //     <Routes>
  //         <Route path="/about" element={<Card />}>
  //         </Route>
  //         <Route path="/topics">
  //         </Route>
  //         <Route path="/" element={<App/>}>
  //         </Route>
  //     </Routes>
  //   </div>
  // </Router>