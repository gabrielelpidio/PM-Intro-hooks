import React from "react"

export const Layout = props => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-800 py-10">
      {props.children}
    </div>
  )
}
