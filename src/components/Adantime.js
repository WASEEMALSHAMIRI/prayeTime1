import "../components/style.css"
import React from "react"
export default function Prayers(props) {
  return (
    <div className="prayer">
      <h2>{props.time}</h2>
      <h2>{props.name}</h2>

    </div>
  )
}