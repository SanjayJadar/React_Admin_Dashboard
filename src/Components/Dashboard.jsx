 import StorageInformation from "./DashboardComponents/StorageInformation";
import Performance from "./DashboardComponents/Performance";
import LatestHits from "./DashboardComponents/LatestHits"; 
import Notification from "./DashboardComponents/Notification";
import OrderList from "./DashboardComponents/OrderList";


const Dashboard = () => {
 

    return (
        <div>
            <p>Welcome back, <span>Admin</span></p>

            <div className="grid grid-cols-2 pl-20 ml-10">  
                {/* Latest Hits */}
                <div className="w-4/5 mt-20 p-10 bg-slate-100 rounded">
                    <h1 className="mb-5">Latest Hits</h1>
                     <LatestHits />
                </div>
          
                {/* Performance  */}
                <div className="w-4/5 mt-20 p-10 bg-slate-100 rounded">
                    <h1>Performance</h1>
                     <Performance/>
                </div>
        
                {/* Storage Information  */}
                <div className="w-4/5 px-32 py-10 mt-20 bg-slate-100 rounded">
                    <h1 style={{marginLeft:'-80px'}} className="mb-5">Storage Information</h1>
                    <StorageInformation/>
                </div>
        
                {/* Notification List */}
                <div className="w-4/5 p-10 mt-20 bg-slate-100 rounded">
                    <h1 className="mb-5">Notification List</h1>
                    <Notification/>
                </div>
            </div>
            
            {/* Order List  */}
                <OrderList/>

        </div>
    )
}





export default Dashboard;


