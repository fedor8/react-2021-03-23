import Rate from "../rate";

export default function Review(props) {
    return (
        <div>
            <b>{props.review.user}</b>
            <Rate value={props.review.rating}/>
            <span>{props.review.text}</span>
        </div>
    );
}