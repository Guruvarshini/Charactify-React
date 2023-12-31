import React from 'react';
function Note(inf){
    return(
        <div class="kdrama-note">
            <h2 class="kdrama-title">{inf.title}</h2>
            <p class="kdrama-description">{inf.des}</p>
            <button onClick={()=>inf.del(inf.id)}>DEL</button>
      </div>
    );
}
export default Note;