import './index.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/Home/HomePage'
import WelcomePage from './pages/Welcome/WelcomePage'
import LoginPage from './pages/Login/LoginPage'
import CatalogPage from './pages/Catalog/CatalogPage'
import ProductPage from './pages/Product/ProductPage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import ProfilePage from './pages/Profile/ProfilePage'
import AboutPage from './pages/About/AboutPage'
import InboxPage from './pages/Inbox/InboxPage'
import ChatbotPage from './pages/Chatbot/ChatbotPage'
import ForumPage from './pages/Forum/ForumPage'

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='welcome'
          element={<WelcomePage />}
        />
        <Route
          path='login'
          element={<LoginPage />}
        />
        <Route
          path='catalog'
          element={<CatalogPage />}
        />
        <Route
          path='product'
          element={<ProductPage />}
        />
        <Route
          path='checkout'
          element={<CheckoutPage />}
        />
        <Route
          path='profile'
          element={<ProfilePage />}
        />
        <Route
          path='about'
          element={<AboutPage />}
        />
        <Route
          path='inbox'
          element={<InboxPage />}
        />
        <Route
          path='chatbot'
          element={<ChatbotPage />}
        />
        <Route
          path='forum'
          element={<ForumPage />}
        />
      </Routes>
    </>
  )
}

export default App
