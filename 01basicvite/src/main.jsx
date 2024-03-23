import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <div>
            <h1>custom react app</h1>
        </div>
    )
    }

    function displayMyName(){
        return (
            <div>
                <h1>Omkar Shelke</h1>
                <pre>frontend engineer at Cars24</pre>
            </div>
        )
    }

    const AnotherElement=(
        <a href="http://google.com" target="_blank">visit google</a>
    );

    const secondElement=(
        <buttton><a href="http://flipkart.com">visit store</a></buttton>
    )

    const areactElement= React.createElement(
        'a',
        {href:'https://google.com',target:"_blank"},
        'click to visit google'
    )

ReactDOM.createRoot(document.getElementById('root')).render(

<>
    {/*MyApp()*/}
    {displayMyName()}
    {AnotherElement}
    {/* {secondElement} */}
    {/* {areactElement} */}
    <App/>
</>
)
