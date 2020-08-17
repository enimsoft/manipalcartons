import { useState } from 'react'

const WithState = ({Component, ...props}) => {
    const [state, setstate] = useState({})
    return <Component {...{state, setstate, ...props}}/>
}

export default WithState