import {useState} from "react"
import axios from "axios"
function Create()
{
const[rno,setRno]=useState("")
const[name,setName]=useState("")
const[marks,setMarks]=useState("")

const hRno=(event)=>{setRno(event.target.value)}
const hName=(event)=>{setName(event.target.value)}
const hMarks=(event)=>{setMarks(event.target.value)}

const save=(event)=>{
	event.preventDefault()
	if(rno.length===0)
	{
		alert("empty rno not allowed")
		return
	}
	if(parseInt(rno)<0)
	{
		alert("-ve rno not allowed")
		return
	}
	if(name.length===0)
	{
		alert("empty name not allowed")
		return
	}
	if(name.trim().length===0)
	{
		alert("only spaces not allowed")
		return
	}
	if(!name.match(/^[A-z ]+$/))
	{
		alert("only alphabets allowed")
		return
	}
	if(marks.length===0)
	{
		alert("empty marks not allowed")
		return
	}
	if(marks<0)
	{
		alert("min 0 marks")
		return
	}
	if(marks>100)
	{
		alert("max 100 marks")
		return
	}
	let urladd="http://localhost:9000/create"
	axios.post(urladd,{rno,name,marks})	
	.then(res=>{
		if(res.data.affectedRows===1)
		{
			alert("thank u")
		}
		if(res.data.code=="ER_DUP_ENTRY")
		{
			alert("rno already present")
		}
	})
	.catch(err=>console.log(err))
}
return(
<>
<center>
<h1> Create </h1>
<form onSubmit={save}>
<input type="number" placeholder="enter rno" onChange={hRno}/>
<br/><br/>
<input type="text" placeholder="enter name" onChange={hName}/>
<br/><br/>
<input type="number" placeholder="enter marks" onChange={hMarks}/>
<br/><br/>
<input type="submit"/>
</form>
</center>
</>
)
}
export default Create;