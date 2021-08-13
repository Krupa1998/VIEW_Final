import React from 'react'


const Content = ({ image }) => {
    return (
        <div className="d-flex justify-content-around">
            <img src={image} width="100%" />
        </div>
    )
}

export default Content
