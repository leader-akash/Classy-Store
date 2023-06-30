import React from "react";

const Navbar = () =>{

    return(
        <>
        {/* <div className="navbar">
            <h1>Classy Store</h1>
            <input type="text" />
        </div> */}
        <div class="alert alert-info">
	<i class="fa-solid fa-circle-info"></i>This is an info alert!
</div>
<div class="alert alert-warning">
	<i class="fa-solid fa-triangle-exclamation"></i>This is a warning alert !
</div>
<div class="alert alert-error">
	<i class="fa-solid fa-circle-exclamation"></i>This is an error alert!
</div>
<div class="alert alert-success">
	<i class="far fa-check-circle"></i>This is a success alert !
</div>
        </>
    );
}

export default Navbar;