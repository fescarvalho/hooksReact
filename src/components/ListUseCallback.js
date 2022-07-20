import { useState, useEffect } from 'react'

const ListUseCallback = ({ getElement }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(getElement)
    console.log('Buscando dados')
  }, [getElement])

  return <>{data && data.map((data) => <li key={data}>{data}</li>)}</>
}

export default ListUseCallback
