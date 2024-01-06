import { create } from 'zustand'

type Product = {
  id: string
  quantity: number
  price: number
}

type State = {
  cart: Product[]
  totalItems: number
  totalPrice: number
}

type Actions = {
  // eslint-disable-next-line no-unused-vars
  addToCart: (Item: Product) => void
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (Item: Product) => void
}

const initialState: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0
}

export const useCart = create<State & Actions>((set, get) => ({
  ...initialState,
  addToCart: (product: Product) => {
    const cart = get().cart
    const cartItem = cart.find((item) => item.id === product.id)

    // If the item already exists in the Cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      )
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price
      }))
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }]

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price
      }))
    }
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price
    }))
  }
}))
