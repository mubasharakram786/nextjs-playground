
async function ProductDetails ({params}) {
    const {productId} = await params
  return (
    <div>Product-{productId} Details</div>
  )
}

export default ProductDetails