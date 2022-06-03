import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
    const stateData = useSelector((state) => state);
    console.log('stateData', stateData);
    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Orders</h2>
                </div>
            </div>
        </>
    )
}

export default Orders;