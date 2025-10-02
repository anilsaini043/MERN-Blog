import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "./ui/button"
import Logo from "../assets/logo.png"
import { Input } from './ui/input'
import { FaMoon } from "react-icons/fa";
import { Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Navbar = () => {
    const user = true;
    return (
        <div className='py-2 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white z-50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0'>
                {/* Logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}>
                        <div className='flex gap-2 items-center'>
                            <img src={Logo} alt='' className='w-7 h-7 md:w-10 md:h-10 dark:invert' />
                            <h1 className='font-bold text-3xl md:text-4xl'>Logo</h1>
                        </div>
                    </Link>
                    <div className='relative hidden md:block'>
                        <Input
                            type="text"
                            placholder="Search..."
                            className="border border-gray-700 dark:bg-gray-900 bg-gray-300 w-[300px] hidden md:block"
                        />
                        <Button className="absolute right-0 top-0 bg-gray-800 text-white">
                            <Search />
                        </Button>
                    </div>
                </div>
                {/* Nav section */}
                <nav className='flex md:gap-7 gap-4 items-center'>
                    <ul className='hidden md:flex gap-7 items-center text-xl font-semibold'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/blogs'}><li>Blogs</li></Link>
                        <Link to={'/about'}><li>About</li></Link>
                    </ul>
                    <div className='flex'>
                        <Button className="bg-gray-800 text-white"><FaMoon /></Button>
                        {
                            user ? <div className='ml-7 flex gap-3 items-center'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Link to={"/login"} className='bg-gray-800 text-white'><Button>Logout</Button></Link>
                            </div>
                                : <div className='ml-7 md:flex gap-2'>
                                    <Link to={"/login"} className='bg-gray-800 text-white'><Button>Login</Button></Link>
                                    <Link to={"/signup"} className='hidden md:block bg-gray-800 text-white'><Button>Signup</Button></Link>
                                </div>
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;