import React from "react";
import swal from "sweetalert";

const SingleFood = ({
  food: { strCategory, strCategoryThumb, strCategoryDescription },
}) => {
  const handleOrder = () => {
    swal({
      title: "Are you sure?",
      text: "Are You want to order this food ..!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Done! Your order is successfully placed", {
          icon: "success",
        });
      } else {
        swal("You cancel your order!");
      }
    });
  };

  return (
    <div className=" mt-10 bg-yellow-200 shadow py-10 font-mono">
      <img
        className="h-ful rounded mb-5"
        src={strCategoryThumb}
        alt={strCategory}
      />
      <h1 className="justify-center flex  items-center text-4xl">
        {strCategory}
      </h1>
      <div
        onClick={handleOrder}
        className="rounded-full bg-gray-100 mt-10  py-2  px-3 flex justify-center  items-center text-2xl text-xs  cursor-pointer"
      >
        Order
      </div>
    </div>
  );
};

export default SingleFood;
