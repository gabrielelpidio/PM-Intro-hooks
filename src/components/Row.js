import React from "react"

export const Row = ({ title, children }) => {
  return (
    <div className="row-container">
      <h2 className="row-title">{title}</h2>
      <div className="row-content">{children}</div>
    </div>
  )
}
