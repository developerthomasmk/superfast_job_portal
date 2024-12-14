import './index.css';
import downarrow from '../../assets/images/downarrow.png';
import { PostRegisterDetails } from '../../api/auth';



function EmployeeRegister()
{
  const auth=async(e)=>{
     e.preventDefault();
     const formData=new FormData(e.target);
     const entries=Object.fromEntries(formData.entries());
     const response=await PostRegisterDetails(entries);
     if(response)
     {
       alert(response.message)
     }
  }
  return(
    <div class="maincontainer">
        <div class="subcontainer">
         <h1>Tech news, trends and companies - just for you.</h1>
         <h3>Join our community to stay current on tech and grow your skills.</h3>
         <div class="parentinputbox">
            <form  onSubmit={auth}  class="registerform">
         <div class="inputbox">
            <input type="name" placeholder="Name" name="name"/>
            <label for="name">Name</label>
         </div>
         <div class="inputbox">
            <input type="email" placeholder="Email Address" name="email"/>
            <label for="email">Email</label>
         </div>
         <div class="inputbox">
            <input type="password" placeholder="Password" name="password"/>
            <label for="password">Password</label>
         </div>
         <div class="inputbox">
            <input type="text" placeholder="Confirm Password" name="confirmpassword"/>
            <label for="confirmpassword">Confirm Password</label>
         </div>
            <div class="option1">
                <select name='option'>
                    <option>Employer</option>
                    <option>Joinee</option>
                </select>
         </div>
         <h4><button  style={{color: "white",fontSize:"22px",border:'none',background:'transparent'}} type='submit'>Register</button></h4>
         <h2> Already have an account?<a href="/login" style={{color:"white",textDecoration:"none"}}> Log in</a></h2>
        </form>
        </div>
    </div>
      <div class="authfooter">
        <h5>Before signing up the page. Please read the terms and policy!</h5>
      </div>
    </div>
  );
}

export default EmployeeRegister;