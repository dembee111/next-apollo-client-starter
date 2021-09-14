import Navbar from './navbar'
import Footer from './footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}