import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Browse from './components/Browse';
import MovieInfo from './components/MovieInfo';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Login />
          },
          {
            path: "browse",
            element: <Browse />,
            children: [
              {
                path: "movie",
                element: <MovieInfo />
              }
            ]
          },
        ]
    },
])

function App() {
  return (
    <Provider store={appStore}>
      <div className="font-martel bg-black">
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
