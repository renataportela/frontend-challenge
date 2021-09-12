import { atom } from 'jotai'

export const isMiniCartOpenAtom = atom(false)

export const cartAtom = atom([])

export const addToCartAtom = atom(
  null,
  function addToCart(get, set, product) {
    const cart = get(cartAtom)
    const index = cart.findIndex(o => o.id === product.id)
  
    if (index === -1) {
      set(cartAtom, [...cart, { ...product, quantity: 1 }])
    } else {
      const update = [...cart]
      update[index].quantity += 1
      set(cartAtom, update)
    }
  }
)

export const removeFromCartAtom = atom(
  null,
  function removeFromCart(get, set, productId) {
    const cart = get(cartAtom)
    const index = cart.findIndex(o => o.id === productId)    
  
    if (index > -1) {
      let copy = [...cart]
      copy.splice(index, 1)
      set(cartAtom, copy)
    }
  }
)

export const totalCartAtom = atom(get => {
  const sum = get(cartAtom).reduce((acc, product) => acc + parseFloat(product.price), 0)
  return sum.toFixed(2)
})

export const countCartItemsAtom = atom(get => get(cartAtom).length)
