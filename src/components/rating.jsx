const StarRating = ({ rating }) => {
    return (
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>{index < rating ? '★' : '☆'}</span>
        ))}
      </div>
    );
  };

  export default StarRating;