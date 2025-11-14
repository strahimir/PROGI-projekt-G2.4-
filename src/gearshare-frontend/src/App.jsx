import './index.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/Home/HomePage'
import WelcomePage from './pages/Welcome/WelcomePage'
import LoginPage from './pages/Login/LoginPage'
import CatalogPage from './pages/Catalog/CatalogPage'
import ListingPage from './pages/Listing/ListingPage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import ProfilePageClient from './pages/Profile/Klijent/ProfilePageClient'
import ProfilePageTrgovac from './pages/Profile/Trgovac/ProfilePageTrgovac'
import CreateAdPage from './pages/Profile/Trgovac/CreateAdPage'
import AboutPage from './pages/About/AboutPage'
import InboxPage from './pages/Inbox/InboxPage'
import ChatbotPage from './pages/Chatbot/ChatbotPage'
import ForumPage from './pages/Forum/ForumPage'
import RootRedirect from './RootRedirect'
import { useAuth } from './hooks/useAuth'
import { Navigate } from 'react-router'

function App() {

  const { user, loading, handleLogin, handleLogout } = useAuth()

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<RootRedirect />}
        /><Route
          path='home'
          element={<HomePage />}
        />
        <Route
          path='welcome'
          element={<WelcomePage />}
        />
        {/* <Route
          path='login'
          element={<LoginPage />}
        /> */}
        <Route
          path='catalog'
          element={<CatalogPage />}
        />
        <Route
          path='listing'
          element={<ListingPage />}
        />
        <Route
          path='checkout'
          element={<CheckoutPage />}
        />
        <Route
          path='profile1'
          element={<ProfilePageTrgovac />}
        />
        <Route
          path='profile2'
          element={<ProfilePageClient />}
        />
        <Route
          path='profile1/create-ad'
          element={<CreateAdPage />}
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
