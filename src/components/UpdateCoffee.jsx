import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

 const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
          Swal.fire({
            title: 'Success',
            text: 'Updated Coffee Successfully',
            icon: 'Success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <div className="justify-items-center mt-8">
    <h1 className="text-3xl font-extrabold">Update Coffee</h1>
    <form onSubmit={handleUpdateCoffee}>
      <div className="flex">
        <div className="form-control mr-4">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
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
            defaultValue={quantity}
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
            defaultValue={supplier}
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
            defaultValue={taste}
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
            defaultValue={category}
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
            defaultValue={details}
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
            defaultValue={photo}
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
      </div>
      <input
        type="submit"
        value="Update Coffee"
        className="btn btn-block mt-4"
      />
    </form>
  </div>
  );
};

export default UpdateCoffee;
