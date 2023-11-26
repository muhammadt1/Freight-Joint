import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ActiveLoads from './pages/ActiveLoads'
import PostLoad from './pages/PostLoad'
import MarketPlace from './pages/MarketPlace'
import MyLoads from './pages/MyLoads'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path = "resetpassword" element={<ResetPassword />} />
      <Route path = "activeloads" element={<ActiveLoads />} />
      <Route path = "postload" element={<PostLoad />} />
      <Route path = "marketplace" element={<MarketPlace />} />
      <Route path = "myloads" element={<MyLoads />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App