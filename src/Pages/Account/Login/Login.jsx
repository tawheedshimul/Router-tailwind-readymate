import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ backgroundImage: "url('https://i.ibb.co/2yxF6Dh/loginbf.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="flex itmes-center">
                <div className='bg-black w-6/12 py-3.5 font-bold md:border-r border-b border-black'> <span className='px-2'>TAWHEED</span>  </div>
                <div className='border-b backdrop-blur-lg bg-white/10 w-full py-3.5 flex justify-around  font-bold  outline-none'>
                    <div className='border-b-2'>
                        LOGIN
                    </div>
                    <div>
                        <Link to="/registration">REGISTRATION</Link>
                    </div>
                </div>
            </div>
            <div className="p-6 h-[91vh] backdrop-blur-lg bg-white/10">
                <form>
                    <div className='item-center'>
                        <div class="relative w-full min-w-[200px]">
                            <input placeholder="Email"
                                class="peer  w-full border-b border-blue-gray-200 bg-transparent pt-1.5 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                    </div>
                    <div class="relative mt-4 w-full min-w-[200px]">
                        <input placeholder="Passwordd"
                            class="peer w-full border-b border-blue-gray-200 bg-transparent pt-1.5 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="remember" className="outline-none focus:outline focus:outline-sky-300" />
                            <span className="text-xs">Remember me</span>
                        </label>
                        <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot password?</a>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-x-2">
                        <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/register">Register</a>
                        <button className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2" type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
