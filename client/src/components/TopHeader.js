import React from "react";
import './TopHeader.scss';
<<<<<<< HEAD
import TodoTemplate from "./todoTemplate";
=======

>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
          {children}
  </div>
)

const TopHeader=()=>{
return(

<div className="TopMenu">
 
<MenuItem>로그인</MenuItem>  
<MenuItem>공지사항</MenuItem>
<<<<<<< HEAD
<TodoTemplate/>

=======
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
</div>

)
}

export default TopHeader;