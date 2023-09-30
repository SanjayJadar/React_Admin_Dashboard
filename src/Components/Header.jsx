import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductDetails from "./ProductComponents/ProductDetails";


const Header = () => {
    const [dropDown1, setDropDown1] = useState('hidden')
    
    const [dropDown2, setDropDown2] = useState('hidden')

    // Drop down Style
    const dropDownStyle1 = {
        visibility:`${dropDown1}`,
        // position : 'static',
        // position : 'relative',
        // position : 'fixed',
        position : 'absolute',
        display:'block',
        float:'none'
    };
    const dropDownStyle2 = {visibility:`${dropDown2}`};

    return (
        <> 
            <ul style={{backgroundColor:'#567086'}} className="px-96 grid grid-cols-5 justify-center text-white relative">
                <li className="cursor-pointer hover:bg-yellow-500 text-center pt-8">
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className="cursor-pointer hover:bg-yellow-500 text-center pt-8">
                    <div>
                        <div onClick={()=>{
                            if(dropDown1==='hidden'){
                                setDropDown1('visible');
                            }
                            else{
                                setDropDown1('hidden');
                            }
                            console.log(dropDown1);
                        }} >Report</div>
                    </div>
                    <div style={dropDownStyle1}>
                        <ul className="">
                            <li>Daily Reports</li>
                            <li>Weekly Reports</li>
                            <li>Monthly Reports</li>
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer hover:bg-yellow-500 text-center pt-8">
                    <Link to='/products'>Products</Link>
                </li>
                <li className="cursor-pointer hover:bg-yellow-500 text-center pt-8">
                    <Link to='/accounts'>Accounts</Link>
                </li> 
                <li className="cursor-pointer hover:bg-yellow-500 text-center pt-8">
                    <div>
                        <div onClick={()=>{
                            if(dropDown2==='hidden'){
                                setDropDown2('visible');
                            }
                            else{
                                setDropDown2('hidden');
                            }
                            console.log(dropDown2);
                        }} >Settings</div>
                    </div>
                    <div style={dropDownStyle2}>
                        <ul>
                            <li>Profile</li>
                            <li>Billing</li>
                            <li>Customize</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <ProductDetails/>
        </>
    )
}

export default Header;