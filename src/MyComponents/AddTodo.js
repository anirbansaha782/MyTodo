import React,{useState} from 'react';

export default function AddTodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            return alert("Title or Description cannot be blank")
        }
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div class="container text-center my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
            <div className="form-group mb-3">
                <label for="title">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title"/>
            </div>
            <div class="form-group mb-3">
                <label for="desc">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} class="form-control" id="desc" placeholder="Description"/>
            </div>
            <button type="submit" class="btn btn-sm btn-success mr-1">Todo Submit</button>
            </form>
        </div>
    )
}
