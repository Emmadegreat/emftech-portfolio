import React from 'react'

export const Img = ({src, alt, className}, ...props) => {
    return (
        <div>
            <img
                src={src}
                alt={alt}
                className={className}
                {...props}
            />
        </div>
    )
}

//export default Img