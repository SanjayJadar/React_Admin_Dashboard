import React from "react";
import ApiData from './ApiData';

const OrderList = () => {

    const passdata = ApiData();

    if(passdata.length===0){
        return <></>
    }
    const data = passdata.orders;
    // console.log(data);


    return (
        <div>
            <table className="w-3/4 bg-slate-100 text-left rounded mx-48 my-24">
                <tr className="bg-slate-400">
                    <th className="py-8 pl-10">ORDER NO.</th>
                    <th className="py-8">STATUS</th>
                    <th className="py-8">OPERATORS</th>
                    <th className="py-8">LOCATION</th>
                    <th className="py-8">DISTANCE</th>
                    <th className="py-8">START DATE</th>
                    <th className="py-8">EST DELIVERY</th>
                </tr>

                {/* DATA  */}
                {data.map((item, index)=> (

                    <tr key={index} className="m-6">
                        <td className="py-3 pl-14">{item.orderNo}</td>
                        <td className="py-3">{item.status}</td>
                        <td className="py-3">{item.operators}</td>
                        <td className="py-3">{item.location}</td>
                        <td className="py-3 pl-6">{item.distance}</td>
                        <td className="py-3">{item.startDate}</td>
                        <td className="py-3">{item.deliveryDate}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}


export default OrderList;