import React, { use, useState } from 'react'

const HandleCheckbox = () => {
    const [selected, setSelected] = useState({
        html: false,
        css: false,
        js: false
    })
    const htmlChecked = (e)=>{
            console.log(e.target.checked)
            setSelected({...selected , html: e.target.checked})
    }
     const cssChecked = (e)=>{
            console.log(e.target.checked)
            setSelected({...selected , css: e.target.checked})
    }
     const jsChecked = (e)=>{
            console.log(e.target.checked)
            setSelected({...selected , js: e.target.checked})
    }
    return (
        <div>
            <label >
                <input type="checkbox" checked={selected.html}onChange={htmlChecked} />
                html</label><br /><br />
            <label >
                <input type="checkbox" checked={selected.css} onChange={cssChecked}/>
                css</label><br /><br />
            <label >
                <input type="checkbox" checked={selected.js} onChange={jsChecked} />
                js</label><br /><br />
                <h2>selected:</h2>
                <ul>
                    {selected.html && <li>html</li>}
                    {selected.css && <li>css</li>}
                    {selected.js && <li>js</li>}
                </ul>
        </div>
    )
}

export default HandleCheckbox
