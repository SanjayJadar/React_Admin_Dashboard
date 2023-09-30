import React from "react";
import ApiData from "./ApiData";

const Notification = () => {

    const passData = ApiData();
    
    if(passData.length===0){
        return <></>
    }

    const data = passData.notifications;
    // console.log(passData.notifications);
    
    return (
        <div>
            {/* <h2>Notifcation List</h2> */}
            <div>
                {data.map((item,index)=>(
                    <div className="flex flex-row bg-slate-400 my-4 py-3 pl-3 rounded" key={index}>
                        <img className="w-20 h-20 rounded-full mr-4" src={item.pic} alt="" />
                        <div>
                            <h5>{item.message}</h5>
                            <p className="text-slate-500">{item.time} ago.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification;