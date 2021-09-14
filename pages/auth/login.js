import React, { useState, useContext } from 'react'
import styles from '../styles/index.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState('')

  const handleSubmit = () => {
// 
  }

  return (
    <div className={styles.container}>
      <div>
        <h4>Нэвтрэх</h4>
        <form onSubmit={()=> handleSubmit()}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" disabled={loading} /> 
          </div>
          <button className="btn btn-raised btn-primary" disabled={!email || loading}>Submit</button>
        </form>
      </div>
    </div>
  )
}
