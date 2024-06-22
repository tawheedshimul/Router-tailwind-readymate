import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {


    const { createUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const displayName = form.get('displayName');
        // const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, displayName, password);

        createUser(email, password, displayName)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div style={{ backgroundImage: "url('https://i.ibb.co/2yxF6Dh/loginbf.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="flex items-center">
                <div className='bg-black w-6/12 py-3.5 font-bold md:border-r border-b border-black'> <span className='px-2'>TAWHEED</span>  </div>
                <div className='border-b backdrop-blur-lg bg-white/10 w-full py-3.5 flex justify-around  font-bold  outline-none'>
                    <div>
                        <Link to="/login">LOGIN</Link>
                    </div>
                    <div className='border-b-2'>
                        REGISTRATION
                    </div>
                </div>
            </div>
            <div className="p-6 h-[91vh] backdrop-blur-lg bg-white/10">
                <form onSubmit={handleRegister}>
                    <div className='item-center'>
                        <div className="relative w-full min-w-[200px]">
                            <input name='displayName' placeholder="Name"
                                className="peer w-full border-b border-blue-gray-200 bg-transparent pt-1.5 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                    </div>
                    <div className='item-center mt-4'>
                        <div className="relative w-full min-w-[200px]">
                            <input name='email' placeholder="Email"
                                className="peer w-full border-b border-blue-gray-200 bg-transparent pt-1.5 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                    </div>
                    <div className="relative mt-4 w-full min-w-[200px]">
                        <input name='password' placeholder="Password"
                            className="peer w-full border-b border-blue-gray-200 bg-transparent pt-1.5 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="remember" className="outline-none focus:outline focus:outline-sky-300" />
                            <span className="text-xs">Remember me</span>
                        </label>

                    </div>
                    <div className="mt-4 flex items-center justify-end gap-x-2">
                        <input type="submit" value="SUBMIT" className='font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;