import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={`${styles.footer}`}>
            <Link href="/"><a className={styles.link}>Footer</a></Link>
        </div>
    )
}
export default Footer