import About from './Pages/About'
import AddProduct from './Pages/AddProduct'
import Brands from './Pages/Brands'
import Category from './Pages/Category'
import FindProduct from './Pages/FindProduct'
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
      path:'/home',
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
    },{
      path:'/brands',
      element:(
        <>
          <Brands/>
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
      path:'/addProduct',
      element:(
        <>
        <AddProduct/>
        </>
      )
    },{
      path:'/findproduct',
      element:(
        <>
        <FindProduct/>
        </>
      )
    }
  ])

  return (
    <div >
       <RouterProvider router={route}/>
    </div>
  )
}

export default App