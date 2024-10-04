import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Browse from './components/Browse';

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
            element: <Browse />
          }
        ]
    },
])

function App() {
  return (
    <Provider store={appStore}>
      <div className="font-martel">
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
