import {useState,useEffect} from "react"
import axios from "axios"
function Home()
{
const[data,setData]=useState([])
useEffect(()=>{
	let urladd="http://localhost:9000/read"
	axios.get(urladd)
	.then(res=>setData(res.data))
	.catch(err=>console.log(err))
},[])

const delStudent=(rno)=>{
	let urladd="http://localhost:9000/remove"
	axios.delete(urladd,{data:{rno}})
	.then(res=>{
		if(res.data.affectedRows===1)
		{
			alert("record deleted")
			window.location.reload()
		}
	})
	.catch(err=>console.log(err))
}

return(
<>
<center>
<h1> Home </h1>
<table border="5">
<tr>
<th>Rno</th>
<th>Name</th>
<th>Marks</th>
<th>Actions</th>
</tr>
{
	data.map((e)=>(
		<tr style={{"text-align":"center"}}>
			<td>{e.rno}</td>
			<td>{e.name}</td>
			<td>{e.marks}</td>
			<td> <button onClick={()=>{if(window.confirm("r u sure??? "))	delStudent(e.rno)}}>Delete</button></td>
		</tr>
	))
}
</table>
</center>
</>
)
}
export default Home;