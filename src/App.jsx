import React, { useState, useEffect } from "react"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')))
  }, [])

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthticated={setIsAuthenticated} />
      )}
    </>
  )
}

export default App