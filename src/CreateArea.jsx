import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form  onSubmit={(event)=>props.arr(event)}>
        <input name="title" value={props.title} autoComplete="off" placeholder="Name someone" onChange={(event)=>{props.create(event)}}/>
        <textarea name="content" value={props.descrip} autoComplete="off" placeholder="Describe them..." rows="3" onChange={(event)=>{props.create(event)}}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
