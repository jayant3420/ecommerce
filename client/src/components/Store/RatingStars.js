export const RatingStars = (props) => {
  const points = props.points;
  const pointsFloor = Math.floor(points);
  const pointsCeil = Math.ceil(points);
  let rating_array = [];
  let key = 0;
  if (points === 0) {
    for (let i = 1; i <= 5; i++) {
      rating_array.push(
        <li key={++key}>
          <i className="fas fa-star"></i>
        </li>
      );
    }
  } else if (points > 0 && pointsFloor === pointsCeil) {
    for (let i = 1; i <= pointsFloor; i++) {
      rating_array.push(
        <li key={++key}>
          <i className="fas fa-star star-color-fill"></i>
        </li>
      );
    }
    for (let i = 1; i <= 5 - pointsFloor; i++) {
      rating_array.push(
        <li key={++key}>
          <i className="fas fa-star"></i>
        </li>
      );
    }
  } else {
    for (let i = 1; i <= pointsFloor; i++) {
      rating_array.push(
        <li key={++key}>
          <i className="fas fa-star star-color-fill"></i>
        </li>
      );
    }
    rating_array.push(
      <li key={++key}>
        <i className="fas fa-star-half-alt star-color-fill"></i>
      </li>
    );
    for (let i = 1; i <= 5 - pointsCeil; i++) {
      rating_array.push(
        <li key={++key}>
          <i className="fas fa-star"></i>
        </li>
      );
    }
  }
  return (
    <>
      {rating_array.map((item) => {
        return item;
      })}
    </>
  );
};
