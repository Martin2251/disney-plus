import { signIn } from 'next-auth/react'
import React from 'react'
import { Container } from '../styles'
import { EmailInput, SignUpLink } from './styles'

function Input() {
  return (
   <Container>
    <EmailInput placeholder="Email"  />
    <SignUpLink onClick={() =>signIn()}>
        Continue
    </SignUpLink>
   </Container>
  )
}

export default Input