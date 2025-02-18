import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee",{
        method: 'POST',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Coffee Added Successfully',
            icon: 'Success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };
  return (
    <div className="justify-items-center mt-8">
      <h1 className="text-3xl font-extrabold">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="flex">
          <div className="form-control mr-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control mr-4">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Type here"
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control mr-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block mt-4"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
