import react from "react";
import { useState } from "react";


function EditTitle ({movie}) {

    

    return (
        <div className='edit-title'>
            <input 
                type="text" 
                value={movie}
                />
            <button onClick>Update</button></div>
    );
}

export default EditTitle;