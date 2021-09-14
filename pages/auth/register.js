import React, { useState, useContext } from 'react'
import { auth } from '../../firebase'
import styles from '../styles/index.module.css'
import { toast } from 'react-toastify';

export default function Register() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const config = {
      url: 'http://localhost:3000/auth/registration',
      handleCodeInApp: true
    }

    const result = await auth.sendSignInLinkToEmail(email, config)
    console.log("🚀 ~ file: register.js ~ line 17 ~ handleSubmit ~ result", result)
    // show toast notification to user about email sent
    toast.success("success register")
    // save user email to localstorage 
    window.localStorage.setItem('emailFormRegistration', email)
    // clear state
    setEmail('')
    setLoading('')
  }

  return (
    <div className={styles.container}>
      <div>
        {loading ? (<h5 className="text-danger">Түр хүлээнэ үү</h5>): <h4>Бүртгүүлэх</h4>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="mb-2">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email"  /> 
          </div>
          <button className="btn btn-raised btn-primary mt-4" disabled={!email || loading}>Submit</button>
          </form>
      </div>
    </div>
  )
}
