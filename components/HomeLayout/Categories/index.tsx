import React from 'react'
import { Container } from '../styles'
import { VideoData } from './Data'
import { Wrapper } from './styles'

export default function Categories() {
  return (
    <Container>
      {VideoData?.map((video) => {
        <Wrapper>
          <CategoryContent  />
        </Wrapper>
      })}
    </Container>
  )
  }