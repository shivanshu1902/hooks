import React, { useEffect, useState } from 'react'

function HookEffect1() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookEffect1