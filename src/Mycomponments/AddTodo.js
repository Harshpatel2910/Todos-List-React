

import React,{useState } from 'react';

export const AddTodo = ({addTodo}) => {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


     
    const submit = (e)=>{
      
      e.preventDefault();
      if(!title && !desc){
      alert("Please fill the title and Description");  
    }
    else if(!title)
    {
        alert("Please fill the title");
    }
    else if(!desc)
    {
        alert("Please fill the Description");
    }

    addTodo(title,desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>

            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="Title" class="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                 
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" />
                </div>
              
                <button type="submit" class="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
