import WithStateToggle from '../utils/WithStateToggle'

const before = ({ handler }) => (<button onClick={e => handler(e.target.value)}>Before</button>)
const after = ({ handler }) => (<button onClick={e => handler(e.target.value)}>After</button>)

export default () => (<WithStateToggle {...{Before: before, After: after}}/>)