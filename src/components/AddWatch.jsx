const AddWatch = () => {
  const handleAddSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const newWatch = { name, quantity, photo, price, details };
    console.log(newWatch);

    fetch("http://localhost:5000/watches", {
        method: "POST",
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(newWatch)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Watch Added Successfully!</span>
            </div>
        }
        // form reset
        e.target.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-4 md:p-24 rounded-lg">
      <h2 className="text-2xl font-bold"> Add a Watch </h2>

      <form onSubmit={handleAddSubmit}>
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
            placeholder="Details"
          ></input>
        </div>

        <button type="submit" className="btn mx-auto w-full mt-8">
          Add a Watch
        </button>
      </form>
    </div>
  );
};

export default AddWatch;
