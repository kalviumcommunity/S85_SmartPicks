import About from './Pages/About'
import Category from './Pages/Category'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element:(
        <>
          <Home/>
        </>
      )
    },{
      path:'/category',
      element:(
        <>
          <Category/>
        </>
      )
    },
    {
      path:'/about',
      element:(
        <>
          <About/>
        </>
      )
    }
  ])

  return (
    <div>
       <RouterProvider router={route}/>
    </div>
  )
}

export default App