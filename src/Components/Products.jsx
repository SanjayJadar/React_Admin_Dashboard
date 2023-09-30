import React, { useEffect, useState } from "react"; 
import axios from 'axios';
import { Link } from "react-router-dom";

const Products = () => {

    // First Table Delete Variables
    const [deleteArray1, setDeleteArray1] = useState('');

    // Second Table Delete Variables
    const [deleteArray2, setDeleteArray2] = useState(''); 
    
    const [data1, setData1] = useState([]);

    const [data2, setData2] = useState([]);

    // Fetching api data for Product Page
    useEffect(()=>{
        const fetchApi = async()=>{
            try{
                const fetchData = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
                // setData(fetchData);
                setData1(fetchData.data.productsPage.products); 
                setData2(fetchData.data.productsPage.categories); 
            }catch (error){
                console.log('Error fetching data:', error)
            }
        }
        fetchApi()  
    },[])


    // Deleteing first table
    useEffect(()=>{ 
        if(deleteArray1!==''){
            console.log(deleteArray1); 
            const temp = data1.filter(item => item.name !== deleteArray1);
            setData1(temp); 
        }
    },[deleteArray1])


    // Deleting Second table
    useEffect(()=>{ 
        if(deleteArray2!==''){
            console.log(deleteArray2); 
            const temp = data2.filter(item => item !== deleteArray2);
            setData2(temp); 
        }
    },[deleteArray2])


    return (
        <div className="flex flex-row justify-center">
            {/* Left Table  */}
            <div>
                <table  className="bg-slate-100 text-left rounded m-20">
                    <thead>           
                        <tr className="bg-slate-400">
                            <td className="py-8 px-6">PRODUCT NAME</td>
                            <td className="py-8 px-6">UNIT SOLD</td>
                            <td className="py-8 px-6">IN STOCK</td>
                            <td className="py-8 px-6 pl-12">EXPIRE DATE</td>
                            <td className="py-8 px-6"></td>
                        </tr>
                    </thead>

                    <tbody>
                        {data1.map((item, index)=>(
                            <tr key={index} className="m-6">
                                <td className="py-3 px-10"><Link to={`./products/productDetails?data=${encodeURIComponent(JSON.stringify(item))}`}>{item.name}</Link></td>
                                <td className="py-3 px-10">{item.unitSold}</td>
                                <td className="py-3 px-10">{item.stock}</td>
                                <td className="py-3 px-10">{item.expireDate}</td>
                                <td className="py-3 px-10"><button onClick={()=>setDeleteArray1(item.name)}>❌</button></td>  
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right Table  */}
            <div>
                <table  className="bg-slate-100 text-left rounded m-20">
                    <thead>
                        <tr className="bg-slate-400">
                            <th className="py-8 px-10">Product Categories</th>
                            <th className="py-8 px-10"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {data2.map((item, index)=> (
                            <tr key={index} className="m-6">
                                <td className="py-3 px-10">{item}</td>
                                <td className="py-3 px-10"><button onClick={()=>setDeleteArray2(item)}>❌</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;