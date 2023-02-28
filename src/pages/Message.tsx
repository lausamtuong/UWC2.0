import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
})

function Meassage() {
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    setShowMap(true)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('resize'))
    }
  }, [])

  return (
    <div>
      {showMap && <MapWithNoSSR />}
      <p>This is the Meassage page.</p>
    </div>
  )
}

export default Meassage