import sample from "../../assets/sample.png"
import logo from "../../assets/logo-dark.svg"
import login from "../../assets/login.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import fb from "../../assets/fb.svg"
import twitter from "../../assets/twitter.svg"
import github from "../../assets/github.svg"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="flex">
        <div className="flex-1 h-screen">
            <div className="h-screen flex flex-col">
                <div className="flex-none">
                    <Link to='/'>
                        <img src={logo} alt="Chronos" className="h-8 m-4" />
                    </Link>
                </div>


                <div class="flex-1 h-screen flex flex-col">
                    <div className="flex items-center justify-center flex-col mt-8">
                        <img src={login} alt="Login"  />
                        <p className=" text-2xl mb-12 mt-4">Welcome Back.</p>
                    </div>




                <div className="bg-white flex flex-col items-center justify-center p-8 space-y-2 items-center  ">                    
                    <button type="button" class="text-black  focus:ring-4 font-medium rounded-full text-sm px-8 py-2.5 text-center inline-flex items-center border">
                        <img src={google} alt="Google" className="h-6 w-6 mr-4" />
                        Sign in with Google
                    </button>

                    <button type="button" class="text-black  focus:ring-4 font-medium rounded-full text-sm px-9 py-2.5 text-center inline-flex items-center border">
                        <img src={apple} alt="apple" className="h-6 w-6 mr-4" />
                        Sign in with Apple
                    </button> 

                    <button type="button" class="text-black  focus:ring-4 font-medium rounded-full text-sm px-6 py-2.5 text-center inline-flex items-center border">
                        <img src={fb} alt="fb" className="h-6 w-6 mr-4" />
                        Sign in with Facebook
                    </button>

                    <button type="button" class="text-black  focus:ring-4 font-medium rounded-full text-sm px-8 py-2.5 text-center inline-flex items-center border">
                        <img src={twitter} alt="twitter" className="h-6 w-6 mr-4" />
                        Sign in with Twitter
                    </button>

                    <button type="button" class="text-black  focus:ring-4 font-medium rounded-full text-sm px-8 py-2.5 text-center inline-flex items-center border">
                        <img src={github} alt="github" className="h-6 w-6 mr-4" />
                        Sign in with Github
                    </button>
                </div>


                <div className="m-12 flex  justify-center">
                    <p> Don't have an account? <Link to='/signup'><span>Create one.</span></Link></p>
                </div>
            </div>




            <div class="flex-none">
                <div className="text-sm font-medium text-muted-foreground opacity-70 m-4">&copy; 2024 Chronos Inc.</div>
            </div>
        </div>


    </div>
    <div className="hidden lg:flex flex-1 h-screen">
        <img src={sample} alt="Sign IN" className="h-full w-full object-cover" />
    </div>
    
    </div>
  )
}


export default Login