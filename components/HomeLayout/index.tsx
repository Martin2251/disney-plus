import React from 'react'
import Categories from './Categories'

import SliderBanner from './SliderBanner'
import { Container } from './styles'

type Props = {}

 export default function HomeLayout({}: Props) {
  return (
   <Container>
          <SliderBanner  />
          <Categories  />
    </Container >
      

  )
}

