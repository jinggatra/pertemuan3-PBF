import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import saya from './image/saya.jpg'
import 'bootstrap/dist/css/bootstrap.css';


function Biodata(){
  return(
    <div class="container">

      <img src={saya} alt="logo" width="400" height="400" class="right" />
    
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">NIM</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Class</th>
          </tr>
        </thead>

            <tr>
              <th scope="row">1741720185</th>
              <td>Taufik</td>
              <td>Hidayat</td>
              <td>TI-3A</td>
            </tr>

      </table>

      </div>
    
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Biodata;
