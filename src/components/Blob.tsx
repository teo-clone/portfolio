import * as React from "react"

import { useState } from "react";

import blob from "../images/blob.svg"
import angry_blob from "../images/angry_blob.svg"

const Blob = () => {
    const [isHovered, setIsHovered] = useState(false);

    return <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {isHovered
            ? <object data={angry_blob} type="image/svg+xml" width="50px" className={isHovered ? '' : 'hidden'} />
            : <object data={blob} type="image/svg+xml" width="50px" className={isHovered ? 'hidden' : ''} />
        }
    </div>
}

export default Blob
