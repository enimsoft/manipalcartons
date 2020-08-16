import { useState } from 'react'

const WithStateToggle = ({Before, After}) => {
    const [state, setstate] = useState(false)
    const handler = () => (setstate(!state))
    return <div>{(state) ? <After handler={handler} /> : <Before handler={handler} />}</div>
}

export default WithStateToggle