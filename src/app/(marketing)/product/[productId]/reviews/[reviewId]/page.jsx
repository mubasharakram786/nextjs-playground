export default async function DynamicReviews ({params}){
    const {reviewId,productId} = await params

    return <p>Review {reviewId} of Product {productId}</p>
}