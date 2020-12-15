import React from 'react';
const App = () => {
    React.useEffect(() => fetch('/api').then(res => res.json()).then(d => console.log(d.message)), []);
    return (
        <div>
            <h1>Hello THere</h1>
        </div>
    )
}
export default App;