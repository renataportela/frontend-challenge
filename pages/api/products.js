import faker from 'faker'

const images = [
  '/PNGs/food.png',
  '/PNGs/cannabis.png',
  '/PNGs/oil.png',
  '/PNGs/treats.png',
]

function fakeProductsApi(req, res) {
  const products = [...new Array(10)].map((_, index) => {
    return {
      id: index + 1,
      shortName: faker.commerce.productName(),
      image: images[faker.datatype.number({
        'min': 0,
        'max': 3
      })],
      price: faker.commerce.price(),
      originalPrice: faker.commerce.price(),
      packageContent: `${faker.datatype.number()}g`,
      review: faker.datatype.number({
        'min': 0,
        'max': 5
      }),
    }
  })

  return res.status(200).json(JSON.stringify(products))
}

export default fakeProductsApi
