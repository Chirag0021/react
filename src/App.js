import React, { useState } from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route , Link ,Navigate} from "react-router-dom";
import First1 from './Component/first';
import ParentComponent from "./Component/second";
import Nothing from "./Component/404page";
import Shoping from "./Component/Third";
import Useeffectfirst from "./Component/useeffect";
import Big from "./Component/seconduseeffect";
export default function App()
{
  return(
    <BrowserRouter>
    <Link to="/First1"> First</Link><br/>
    <Link to="/Second"> Second</Link><br/>
    <Link to="/Third"> Third</Link><br/>
    <Link to="/Fourth"> Useeffect</Link><br/>
    <Link to="/Fifth"> UseeffectSecond</Link><br/>
    <Link to="/notfound"> 404</Link><br/>
      <Routes>
        <Route path="First1" element={<First1 / >}/>  
        <Route path="Second" element={<ParentComponent / >}/> 
        <Route path="Third" element={<Shoping / >}/> 
        <Route path="Fourth" element={<Useeffectfirst / >}/>
        <Route path="Fifth" element={<Big / >}/>
        <Route path="/*" element={<Nothing />}/>
        
        </Routes>
    </BrowserRouter>
  )
}



// export default function App() {
//   const [users, setUsers] = useState();

//   // Function to collect data
//   const getApiData = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/"
//     ).then((response) => response.json());

//     setUsers(response);
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//   return (
//     <div className="app">
//       {users &&
//         users.map((user) => (
//           <div className="item-container">
//             Id:{user.completed} Title:{user.title} completed :{user.completed}
            
//             {/* document :{user.id} <div className="document"> document :{use}</div> */}
//             {/* Id:{user.id} <div className="title">Title:{user.completed}</div> */}
//           </div>
         
//         ))}
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

