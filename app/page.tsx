import React from 'react'
import Link from 'next/link'

function Page (props) {
  return (
    <div>
      This is main page. Navigate to <Link href={'/anotherPage'}>another page</Link> to trigger error.
    </div>
  )
}

export default Page
