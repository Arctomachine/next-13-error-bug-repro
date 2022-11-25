import React from 'react'
import Link from 'next/link'
// import '../styles/globals.css'

function RootLayout (props) {
  return (
    <html>
    <head></head>
    <body>
    <ul>
      <li><Link href={'/'}>Home page</Link></li>
      <li><Link href={'/anotherPage'}>Another page</Link></li>
      <li><Link href={'/yetAnotherPage'}>Yet another page</Link></li>
      <li><Link href={'/sidePage'}>Side page</Link></li>
    </ul>
    {props.children}
    </body>
    </html>
  )
}

export default RootLayout
