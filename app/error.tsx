'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

function Error ({ error }: {
  error: Error
  reset: () => void
}) {
  useEffect(function () {
    console.error(error)
  }, [error])

  return (
    <>
      <h1>Error happened.</h1>
      <p>Try moving to <Link href={'/yetAnotherPage'}>yet another page</Link>. It is located inside same route group. If you pressed the link, but still see this message, you triggered the bug.</p>
      <p>You can move to <Link href={'/'}>home page</Link> successfully as it is outside of route group.</p>
      <p>You can move to <Link href={'/sidePage'}>side page</Link> too, it is in another route group. </p>
    </>
  )
}

export default Error
