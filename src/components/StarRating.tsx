import { Star, StarHalf, Star as StarEmpty } from 'lucide-react'; // or use your preferred icon set

type StarRatingProps = {
  value: number; // 0-100
  maxStars?: number;
};

const StarRating = ({ value, maxStars = 5 }: StarRatingProps) => {
  const stars = [];
  let isNotWhole = false;
  const starsFilled = value;
//   const wholeNumber = 0;
//   const decimalValue = 0;
//   const first = Number(value[0]);
//   const last = cieling;
//   if (last === 5) {
//     isNotWhole = true;
//   }

//   if (isNotWhole) {
//     for (let i = 0; i < maxStars; i++) {
//         stars.push(
//           i < starsFilled ? (
//             <Star key={i} className="text-blue-600 fill-blue-400" />
//           ) : (
//             <Star key={i} className="text-blue-600" />
//           )
//         );
//       }
//   } else {
//     for (let i = 0; i < first; i++) {
//         stars.push(
//           i < first ? (
//             <Star key={i} className="text-blue-600 fill-blue-400" />
//           ) : (
//             <Star key={i} className="text-blue-600" />
//           )
//         );
//     }
//     stars.push(<StarHalf className="text-blue-600 fill-blue-400"/>)
//   }

  for (let i = 0; i < maxStars; i++) {
    stars.push(
      i < starsFilled ? (
        <Star key={i} className="text-blue-600 fill-blue-400" />
      ) : (
        <Star key={i} className="text-blue-600" />
      )
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;