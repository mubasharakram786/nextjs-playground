import Link from "next/link"

function page() {
  return (
    <>
    <ul>
      <li>
        <Link href={'/register'}>Register</Link>
      </li>
      <li>
        <Link href={'/customer'}>Customers</Link>
      </li>
      <li>
      <Link href={'/revenue'}>Revenue</Link>
      </li>
      <li>
      <Link href={'/product'}>Product</Link>
      </li>
    </ul>
      <br />
      <ul>
        <li>
          <Link href={'articles/BBC-news-123?lang=en'}>Article In English</Link>
        </li>
        <li>
          <Link href={'articles/BBC-news-123?lang=es'}>Article In Spanish</Link>
        </li>
        <li>
          <Link href={'articles/BBC-news-123?lang=fr'}>Article In French</Link>
        </li>
      </ul>
    </>
  )
}

export default page