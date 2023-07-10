// import "./Login.css";
// import apple from "../images/apple.png";
// import google from "../images/google.png";
// import { Link } from "react-router-dom";

// function LogIn() {
//   return (
//     <div className="MainContainer">
//       <div className="Child1">
//         <h1>Board.</h1>
//       </div>
//       <div className="Child2">
//         <div className="GrandChild">
//           <div className="Info">
//             <h1>Sign In</h1>
//             <p>Sign in to your account</p>
//             <div className="BUTTONS">
//               <button className="btnGoogle btn1">
//                 <img src={google} alt="apple_logo" />
//                 <p>Sign in with Google</p>
//               </button>
//               <button className="btnApple btn1">
//                 <img src={apple} alt="apple_logo" />
//                 <p>Sign in with Apple</p>
//               </button>
//             </div>
//           </div>
//           <form className="formm">
//             <div className="SignIn">
//               <div className="Email">
//                 <label>Email address</label>
//                 <br />
//                 <input type="emial" />
//               </div>
//               <div className="Email">
//                 <label>Password</label>
//                 <br />
//                 <input type="password" />
//               </div>
//               <a href="www.google.com">Forgot password?</a>
//               <br />

//               <button>
//                 <Link to="/dashboard"> Sign In</Link>
                
//               </button>
//             </div>
//             <div className="SignUp">
//               <p>
//                 Don't have an account?{" "}
//                 <a href="www.google.com">Register here</a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LogIn;

























import React from "react";
import "./Login.css";
import apple from "../images/apple.png";
import google from "../images/google.png";
import {useNavigate} from "react-router-dom";

function LogIn() {

  let navigate = useNavigate();
  return (
    <div className="MainContainer">
      <div className="Child1">
        <h1>Board.</h1>
      </div>
      <div className="Child2">
        <div className="GrandChild">
          <div className="Info">
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
            <div className="BUTTONS">
              <button className="btnGoogle btn1">
                <img src={google} alt="apple_logo" />
                <p>Sign in with Google</p>
              </button>
              <button className="btnApple btn1">
                <img src={apple} alt="apple_logo" />
                <p>Sign in with Apple</p>
              </button>
            </div>
          </div>
          <form className="formm">
            <div className="SignIn">
              <div className="Email">
                <label>Email address</label>
                <br />
                <input type="email" />
              </div>
              <div className="Email">
                <label>Password</label>
                <br />
                <input type="password" />
              </div>
              
                <button onClick={()=>navigate("/dashboard")}>Sign In</button>
              
            </div>
            <div className="SignUp">
              <p>
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

