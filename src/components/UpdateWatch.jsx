import { Link, useLoaderData } from "react-router-dom";

const UpdateWatch = () => {
  const watch = useLoaderData();
  const { _id, photo, name, details, quantity, price } = watch;

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const details = e.target.details.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;

    const updatedWatch = { name, quantity, details, price, photo };

    fetch(`http://localhost:5000/watches/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedWatch),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("watch updated successfully!");
        }
        e.target.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-4 md:p-24 rounded-lg">
      <h2 className="text-2xl font-bold"> Add a Watch </h2>

      <form onSubmit={handleUpdate}>
        <div className="md:flex gap-x-4 mt-8">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Name of Watch </span>
            </label>
            <input
              type="text"
              name="name"
              //   className="input input-bordered max-w-xs"
              className="input input-bordered w-full"
              defaultValue={name}
              placeholder="Watch Name"
            />
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Quantity </span>
            </label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered w-full"
              defaultValue={quantity}
              placeholder="Quantity"
            />
          </div>
        </div>

        <div className="md:flex gap-x-4">
          <div className="md:w-1/2 form-control">
            <label className="label">
              <span className="label-text"> Price </span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered w-full"
              defaultValue={price}
              placeholder="Price"
            />
          </div>

          <div className="md:w-1/2 form-control">
            <label className="label">
              <span className="label-text"> Photo URL </span>
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              defaultValue={photo}
              placeholder="URL"
            />
          </div>
        </div>

        <div className="md:w-full form-control">
          <label className="label">
            <span className="label-text"> Details </span>
          </label>
          <input
            name="details"
            className="input input-bordered w-full"
            defaultValue={details}
            placeholder="Details"
          ></input>
        </div>

        <button type="submit" className="btn mx-auto w-full mt-8">
          Update a Watch
        </button>

        <Link to='/'>
          <button
            type="button"
            className="bg-gray-800 text-white flex flex-row items-center mt-8 w-full rounded-md py-2 hover:bg-red-700 hover:text-white px-3"
          >
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="nonzero"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="nonzero"
              ></path>
            </svg>
            <p className="ml-2">Back to Home</p>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateWatch;
