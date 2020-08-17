import { useState } from 'react'

const WithStateToggle = ({Before, After, ...props}) => {
    const [state, setstate] = useState(false)
    const handler = () => (setstate(!state))
    return <div>{(state) ? <After {...{...props, handler}} /> : <Before {...{...props, handler}} />}</div>
}

export default WithStateToggle