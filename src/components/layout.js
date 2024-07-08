import * as React from "react"
import Header from "./header"
import "./layout.css"
import "../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
export default Layout