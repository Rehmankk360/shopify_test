export const DUMMY_ORDER = {
  order: {
    line_items: [
      {
        title: 'Big Brown Bear Boots',
        price: 74.99,
        grams: '1300',
        quantity: 3,
        tax_lines: [{ price: 13.5, rate: 0.06, title: 'State tax' }],
      },
    ],
    total_tax: 13.5,
    currency: 'EUR',
  },
} as const;

export const SHOPIFY_API_ROUTES = {
  POST: {
    CREATE_ORDER: '/orders.json',
  },
  PUT: {
    UPDATE_ORDER: (id: string) => `/orders/${id}.json`,
  },
  GET: {
    PRODUCTS: '/products.json',
  },
} as const;

export enum WEBHOOK_NAMES {
  ORDER_RECEIVED = 'ORDER_RECEIVED',
  ORDER_FULFILLED = 'ORDER_FULFILLED',
}
