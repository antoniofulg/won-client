import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider,
} as Meta

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story = () => (
  <Slider settings={settings}>
    <Slide>Caixa 1</Slide>
    <Slide>Caixa 2</Slide>
    <Slide>Caixa 3</Slide>
    <Slide>Caixa 4</Slide>
    <Slide>Caixa 5</Slide>
    <Slide>Caixa 6</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>Caixa 1</Slide>
    <Slide>Caixa 2</Slide>
    <Slide>Caixa 3</Slide>
    <Slide>Caixa 4</Slide>
    <Slide>Caixa 5</Slide>
    <Slide>Caixa 6</Slide>
  </Slider>
)
