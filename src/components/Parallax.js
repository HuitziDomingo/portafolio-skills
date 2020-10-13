import React from 'react'
import { Parallax } from 'react-parallax'

const Styles = {
    parallax: {
        background: '#fff',
        left: '50%',
        top: '50%',
        position: 'absolute',
        padding: '20px',
        transform: 'translate(-50%, -50%)'
    }
}


export default (props) => {
    const img1 = "https://picsum.photos/1200/300"
    return (
        <header>
            <Parallax bgImage={img1} strength={500}>
                <div style={{ height: 500 }}>
                    {/* <div style={Styles.parallax}>{casa.foo}</div> */}
                    <div> {props.foo} </div>
                </div>
            </Parallax>
        </header>
    )
}