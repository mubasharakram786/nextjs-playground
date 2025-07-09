import Link from "next/link"

const ProductList = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
        <li>
         <Link href={'/product/1'}>
           Product 1
         </Link>
          </li>
        <li>
          <Link href={'/product/2'}>
          Product 2
          </Link>
          </li>
        <li>
          <Link href={'/product/3'}>
          Product 3
          </Link>
          </li>
    </ul>
  )
}

export default ProductList