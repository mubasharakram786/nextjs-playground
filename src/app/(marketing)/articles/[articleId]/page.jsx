import Link from 'next/link'
export default async function ArticleDetails({params,searchParams}){
    const {articleId} = await params;
    const {lang} = await searchParams

    return(
        <>
        <h2>Article about {articleId}</h2>
        <p>Article in language {lang}</p>

        <ul>
        <li>
          <Link href={`${articleId}?lang=en`}>Article In English</Link>
        </li>
        <li>
          <Link href={`${articleId}?lang=es`}>Article In Spanish</Link>
        </li>
        <li>
          <Link href={`${articleId}?lang=fr`}>Article In French</Link>
        </li>
      </ul>
        </>
    )
}