const WatchDetails = ({watch}) => {
  const {name, photo, price, quantity, details} = watch;

  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Qty: {quantity}</p>
        <p>{details}</p>
        <p>{price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;
