import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({result,children}) => {
  return (
   <>
   <div>
   <Header result={result}/>
   </div>
    <div 
    style={{
      paddingInline:"60px",
      marginTop:"20px"
    }}
    className="layout-children"
    >
    {children}
    </div>
   <Footer/>
   </>
  )
}

export default Layout