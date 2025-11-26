// import React, { useEffect, useState } from 'react'
// import { toast, ToastContainer } from "react-toastify"

// function Home(){
//     var[Title,setTitle]=useState("")
//     var[Description,setDescription] = useState("")
//     var[Data,setData] = useState([])

//     async function createBlog() {
//         var formdata ={
//             myTitle : Title,
//             myDescription : Description
//         }
//         var result = await fetch("https://6924241c3ad095fb8472e080.mockapi.io/User",{
//             method: "POST",
//             headers :{
//                 "content-Type" : "application/json"
//             },
//             body : JSON.stringify(formdata)
//         })
//         if(result.ok){
//             toast.success("Blog Created Successfully")
//             setTitle("")
//             setDescription("")
//             getdata()
//         }
//         else{
//             toast.error("Failed to create the Blog")
//         }
        
//     }

//     async function getdata(){
//         var a = await fetch("https://6924241c3ad095fb8472e080.mockapi.io/User")
//         var b = await a.json()
//         setData(b)
//     }
//     useEffect(()=>{
//         getdata()
//     },[])



//     async function Delete(id){
//         var result = await fetch(`https://6924241c3ad095fb8472e080.mockapi.io/User/${id}`,{
//             method: "DELETE"
//         })
//         if(result.ok){
//             toast.success("Blog deleted")
//             getdata()
//         }
//     }

//     async function Update(id){

//         if(Title.length == 0 && Description.length == 0){
//             toast.error("Fill the Details")
//             return
//         }
//         var updateddata ={
//             myTitle : Title,
//             myDescription : Description
//         }

//         var myresult = await fetch (`https://6924241c3ad095fb8472e080.mockapi.io/User/${id}`,{
//             method: "PUT",
//             headers : {
//                 "content-type" : "application/json"
//             },
//             body : JSON.stringify(updateddata)
//         })
//         if(myresult.ok){
//             toast.success("Blog Updated Successfully")
//             setTitle("")
//             setDescription("")
//             getdata()
//         }
//         else{
//             toast.error("Failed to Update the Blog")
//         }

//     }
    
//     return(
//         <div>
//             <ToastContainer autoClose={1000}/>
//             <div>
//                 <label htmlFor="">Enter Title</label>
//                 <input value={Title} onChange={(e)=>{setTitle(e.target.value)}}  type="text" />
//                 <label htmlFor="">Enter Description</label>
//                 <input value={Description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
//                 <button onClick={createBlog}>Create Blog</button>

//             </div>
//             <div>
//                 {
//                     Data.map((item)=>{
//                         return(
//                             <div>
//                                 <h2>{item.id}</h2>
//                                 <h2>{item.myTitle}</h2>
//                                 <h3>{item.myDescription}</h3>

//                                 <button onClick={()=>Update(item.id)}>Update</button>
//                                 <button onClick={()=>Delete(item.id)}>Delete</button>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// export default Home




// // for styling//

import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify"
import "./Home.css"

function Home() {
    var [Title, setTitle] = useState("")
    var [Description, setDescription] = useState("")
    var [Data, setData] = useState([])

    var[Search,setSearch] = useState("")
    var[alldata,setalldata] = useState([])

  


    // for creating a data//

    async function createBlog() {
         if (Title.length === 0 || Description.length === 0) {     //it should add both.... without adding both title and description it gives alert//
            toast.error("Fill the Details")
            return
        }
        var formdata = {
            myTitle: Title,
            myDescription: Description
        }
        var result = await fetch("https://6924241c3ad095fb8472e080.mockapi.io/User", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        })
        if (result.ok) {
            toast.success("Blog Created Successfully")
            setTitle("")
            setDescription("")
            getdata()
        }
        else {
            toast.error("Failed to create the Blog")
        }
    }


    // for read the data //

    async function getdata() {
        var a = await fetch("https://6924241c3ad095fb8472e080.mockapi.io/User")
        var b = await a.json()
        setData(b)
        setalldata(b)
        
    }

    useEffect(() => {
        getdata()
    }, [])

    useEffect(() => {
    var filterdata = alldata.filter(item => item.myTitle.toLowerCase().includes(Search));
    setData(filterdata);

}, [Search, alldata]);



    // for deleting the data//

    async function Delete(id) {
        var result = await fetch(`https://6924241c3ad095fb8472e080.mockapi.io/User/${id}`, {
            method: "DELETE"
        })
        if (result.ok) {
            toast.success("Blog deleted")
            getdata()
        }
    }

    // for updating the data//

    async function Update(id) {
        if (Title.length === 0 && Description.length === 0) {
            toast.error("Fill the update required Details")
            return
        }

        var updateddata = {
            myTitle: Title,
            myDescription: Description
        }

        var myresult = await fetch(`https://6924241c3ad095fb8472e080.mockapi.io/User/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateddata)
        })

        if (myresult.ok) {
            toast.success("Blog Updated Successfully")
            setTitle("")
            setDescription("")
            getdata()
        }
        else {
            toast.error("Failed to Update the Blog")
        }
    }


    return (
        <div className="home-container">
            <ToastContainer autoClose={1000} />
           

            {/* Create Section */}
            <div className="create-box">
                <h2 className="heading">Create a Blog</h2>

                
                <label htmlFor="">Title</label>
                <input placeholder='Create a Title' className="input" value={Title} onChange={(e) => setTitle(e.target.value)} type="text" />

                <label>Description</label>
                <textarea placeholder='Enter the Description' className="textarea" value={Description} onChange={(e) => setDescription(e.target.value)} />

                <button className="create-btn" onClick={createBlog}>Publish</button>
            </div>

            {/* Blog List */}
            <h2 className="heading">Your Blogs</h2>

            {/* for search box */}
             <input className="search-box" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Blogs here....."  type="text"  />


            <div className="blog-list">
                {
                    Data.map((item) => {
                        return (
                            <div className="blog-card" key={item.id}>
                                <h2 className="blog-title">{item.myTitle}</h2>
                                <p className="blog-desc">{item.myDescription}</p>

                                <div className="actions">
                                    <button className="update-btn" onClick={() => Update(item.id)}>Update</button>
                                    <button className="delete-btn" onClick={() => Delete(item.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
