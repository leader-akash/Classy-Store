import React from 'react';
import "./Badge.css"

const Badge = ({icon, content}) => {
  return (
    <>
        <div className="small-badge">
        <i className={icon}></i>
            <div>
                {content}
            </div>
        </div>
    </>
  )
}

export default Badge;