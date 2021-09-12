/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import { ProductCard } from '../components/app/product'

 const product = {
  id: 1,
  shortName: 'Barkin Salmon Crisps',
  image: '/PNGs/food.png',
  price: 2.24,
  originalPrice: 2.29,
  packageContent: '170g',
  review: 5,
}
 
 describe('ProductCard', () => {
  it('renders an image', () => {
    render(<ProductCard product={product} />)

    const image = screen.getByAltText(/Barkin Salmon Crisps/)

    expect(image).toBeInTheDocument()
  })

   it('renders a heading', () => {
     render(<ProductCard product={product} />)
 
     const heading = screen.getByRole('heading', {
       name: /Barkin Salmon Crisps/,
     })
 
     expect(heading).toBeInTheDocument()
   })

   it('renders a price', () => {
    render(<ProductCard product={product} />)

    const price = screen.getByText('2.24Є')

    expect(price).toBeInTheDocument()
  })

  it('renders an original price', () => {
    render(<ProductCard product={product} />)

    const price = screen.getByText('2.29Є')

    expect(price).toBeInTheDocument()
  })

  it('renders the package weight', () => {
    render(<ProductCard product={product} />)

    const weight = screen.getByText('170g')

    expect(weight).toBeInTheDocument()
  })

  it('renders the review', () => {
    render(<ProductCard product={product} />)

    const element = screen.getByTestId('review')

    expect(element).toBeInTheDocument()
  })
 })