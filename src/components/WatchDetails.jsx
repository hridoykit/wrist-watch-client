import { Link } from "react-router-dom";

const WatchDetails = ({ watch, watches, setWatches }) => {
  const { _id, name, photo, price, quantity, details } = watch;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/watches/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // <div className="alert alert-warning">
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     className="stroke-current shrink-0 h-6 w-6"
          //     fill="none"
          //     viewBox="0 0 24 24"
          //   >
          //     <path
          //       strokeLinecap="round"
          //       strokeLinejoin="round"
          //       strokeWidth="2"
          //       d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          //     />
          //   </svg>
          //   <span>Warning: Your cart deleted successfully!</span>
          // </div>;
          alert("watch delete successfully!");

          // remove from ui
          const remaining = watches.filter(watch => watch._id !== _id);
          setWatches(remaining);
        }
      });
  };

  return (
    <div className="card card-side bg-base-100 text-start max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
      <div className="flex">
        <figure className="md:shrink-1">
          <img
            className="h-48 w-48 object-cover md:h-48 md:w-48 rounded-full"
            src={photo}
            alt="watch"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p title={details}>
            {details.length > 50 ? (
              <p>{details.slice(0, 60) + "..."}</p>
            ) : (
              { details }
            )}
          </p>
          <p>Qty: {quantity}</p>
          <p>Price: {price}</p>
        </div>
        <div className="join join-vertical justify-center">
          <button className="btn join-item mb-1 text-lg font-medium text-black hover:underline">
            Buy
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item mb-1 text-lg font-medium text-black hover:underline"
          >
            Delete
          </button>
          <button className="btn join-item mb-1 text-lg font-medium text-black hover:underline">
            <Link to={`/updateWatch/${_id}`}>Update</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;
