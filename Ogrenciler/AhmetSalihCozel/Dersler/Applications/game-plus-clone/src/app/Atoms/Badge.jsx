import React from 'react'

const Badge = ({className="", children}) => {

    const mutualCss = "bg-yellow-400 rounded-xl text-black px-1.5 py-0.5 font-semibold w-fit text-sm"

  return <p className={`${className} ${mutualCss}`}>{children}</p>
}

export default Badge