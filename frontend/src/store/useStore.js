import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      cart: { items: [] },
      wishlist: [],
      
      // Auth actions
      setUser: (user) => set({ user }),
      logout: () => set({ user: null, cart: { items: [] }, wishlist: [] }),
      
      // Cart actions
      addToCart: (product, quantity = 1) => {
        const { cart } = get()
        const existingItem = cart.items.find(item => item.id === product.id)
        
        if (existingItem) {
          set({
            cart: {
              items: cart.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            }
          })
        } else {
          set({
            cart: {
              items: [...cart.items, { ...product, quantity }]
            }
          })
        }
      },
      
      updateCartItemQuantity: (productId, quantity) => {
        const { cart } = get()
        if (quantity <= 0) {
          set({
            cart: {
              items: cart.items.filter(item => item.id !== productId)
            }
          })
        } else {
          set({
            cart: {
              items: cart.items.map(item =>
                item.id === productId ? { ...item, quantity } : item
              )
            }
          })
        }
      },
      
      removeFromCart: (productId) => {
        const { cart } = get()
        set({
          cart: {
            items: cart.items.filter(item => item.id !== productId)
          }
        })
      },
      
      clearCart: () => set({ cart: { items: [] } }),
      
      // Wishlist actions
      addToWishlist: (product) => {
        const { wishlist } = get()
        if (!wishlist.find(item => item.id === product.id)) {
          set({ wishlist: [...wishlist, product] })
        }
      },
      
      removeFromWishlist: (productId) => {
        const { wishlist } = get()
        set({ wishlist: wishlist.filter(item => item.id !== productId) })
      },
      
      // Cart totals
      getCartTotal: () => {
        const { cart } = get()
        return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getCartItemsCount: () => {
        const { cart } = get()
        return cart.items.reduce((count, item) => count + item.quantity, 0)
      }
    }),
    {
      name: 'flipkart-storage',
    }
  )
)
