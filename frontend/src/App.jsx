import About from './Pages/About'
import AddProduct from './Pages/AddProduct'
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
    },{
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