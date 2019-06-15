export const getSumOfProducts = (p) => (
	p.reduce((t, c) => t + (c.price * c.quantity), 0).toFixed(2)
)