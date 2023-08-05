import { useState,useEffect} from "react";
import axios from "axios";
import {Button} from '../components/Button';
import "../App.css";
import styled from 'styled-components';
import {List} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';




const App=()=>{
const[users,setUsers]=useState([]);
const[posts,setPosts]=useState([]);
const[Loading,setLoading]=useState(true);
useEffect(()=>{
fetchposts();
},[])


const fetchuserdata=()=>{
  // requesting to server to fetch data
  fetch(`http://localhost:8000/api/users`,{method:"GET",})
  //converting response into json file
  .then((Response)=>{return Response.json();})
  //updating  the file to the state
  .then((data)=>setUsers(data.users))
  // check for errors
  .catch((err)=>console.log(err));
}
const fetchposts=()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
  .then((data)=>
  {setPosts(data.data);
  setLoading(false);})
  .catch((err)=>console.log(err))
}

if(Loading){
  return (<LoadingOutlined 
  className="display-1 text-success d-flex justify-content-center align-items-center" style={{height:"100vh"}}
  />);
}
return(
<div className="container">


  {users && users.map((user)=><div key={user.age} className="alert alert-info">{user.name} is {user.age} years old</div>)}
  <Button handleclick={fetchuserdata} title="Fetch users"></Button>
  <Button handleclick={fetchposts} title="Fetch Posts"></Button>
  <List
  bordered
  dataSource={posts}
  renderItem={(item)=>
    <List.Item>{item.title}</List.Item>
  } 
  />

   {/* {posts && posts.map((post)=><PostDiv key={post.id}>{post.title}</PostDiv>)} */}
  
  {/* <pre>{JSON.stringify(posts,null,4)}</pre> */}
  {/* <postdiv>Muthu</postdiv>  */}

</div>
);
}
export default App;


const PostDiv=styled.div`
background-color:indigo;
color:white;
border:1px solid #999;
padding:10px;
border-radius:5px;
`;

// import { useState } from 'react';
// function App() {
//   const [user,setUser]=useState("");
//   const [password,setPassword]=useState("");
//   const handleSubmit=(event)=>{
//     event.preventDefault();
//     console.log(`State=> User:${user},Password:${password}`);
//   }
//   return (
//     <div className="container">  
//     <h1 className='display-4  text-center'>Login</h1>
//     <br/>
//      <div className='row'>
//       <div className='col-md-4 offset-md-4'>
//       <form onSubmit={handleSubmit}>
//       <div className='mb-3'>
//       <label class="form-label">Username:</label>
//       <input value={user} onChange={(event)=>setUser(event.target.value)}type="text" className='form-control'></input>
//       </div>
//       <div className='mb-3'>
//       <label class="form-label">Password:</label>
//       <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" className='form-control'></input>
//       </div>
//       <div className='mb-4 offset-md-5'>
//       <button type="submit" className='btn btn-primary'>Submit</button>
//       </div>
//       </form>
//       </div>
//      </div>
//      </div>
//   );
// }

// export default App;
