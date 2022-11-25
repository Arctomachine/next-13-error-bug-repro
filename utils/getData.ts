const getData = async function () {
  const res = await fetch('irrelevant', {
    next: {
      revalidate: 0
    }
  })

  if (true) { // pretend our fetch request failed
    throw new Error('Failed to fetch data from server')
  }

  return res.json()
}

export default getData
