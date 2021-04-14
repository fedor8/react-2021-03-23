import Review from "./review";

export default function ReviewList(props) {
    return (
        <div>
            {props.reviews.map(review => <Review key={review.id} review={review}/>)}
        </div>
    );
}