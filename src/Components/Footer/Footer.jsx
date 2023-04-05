import React from 'react'

const Footer = () => {
  return (
    <footer style={{position:"absolute",bottom:"0",textAlign:"center",minWidth:"100vw",padding:"10px",fontSize:"20px",fontFamily:"sans-serif"}}>
        <p>Copyright &copy; {new Date().getFullYear()} Hai Bang Ngo</p>
    </footer>
  )
}

export default Footer;
