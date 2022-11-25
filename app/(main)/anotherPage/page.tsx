import React from 'react'
import getData from '../../../utils/getData'

async function Page (props) {
  const [data]: [any] = await Promise.all([
    getData().then(res=>res)
  ])
  return (
    <div>
      This is another page. It is inside route group. If you see this message, the error was not thrown.
    </div>
  )
}

export default Page
