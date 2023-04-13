import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"
import { Login, LoginContainer, Logo, Nav } from './style'
import SignedInHeader from './SignedInHeader'



function Header() {
    const {data: session, status} = useSession();

    const renderHeader = () => {
        if(session) return(
            <SignedInHeader session={session}  />
        )
        //if logged in show logged in header 

        return(
            <LoginContainer>
            <Login onClick={() => signIn()}>login</Login>
          </LoginContainer>
        )
    }

  return (
    <Nav><Logo src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
    alt="Disney Logo" ></Logo> 
    
    {renderHeader()}
    </Nav>
  )
}

export default Header