import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "./ui/button"
import Logo from "../assets/logo.png"
import { Input } from './ui/input'
import { FaMoon, FaSun } from "react-icons/fa";
import { Search } from 'lucide-react'
import { FiUser } from "react-icons/fi";
import { PiGithubLogoLight } from "react-icons/pi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { TfiWrite } from "react-icons/tfi";
import { IoMdLogOut } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice'
import { setUser } from '../redux/authSlice'
import axios from 'axios'
import { toast } from 'sonner'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut
} from "../components/ui/dropdown-menu"

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const { theme } = useSelector(store => store.theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/v1/user/logout', {
                withCredential: true
            })
            if (res.data.success) {
                navigate("/");
                dispatch(setUser(null))
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log("Logout error--", error);
            toast.error(error)
        }
    }

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
                        <Button className="bg-gray-800 text-white" onClick={() => dispatch(toggleTheme())}>
                            {
                                theme === 'light' ? <FaMoon /> : <FaSun />
                            }
                        </Button>
                        {
                            user ? <div className='ml-7 flex gap-3 items-center'>
                                {/* Profile menu */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger><Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar></DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={()=>navigate('/dashboard/profile')}>
                                            <FiUser />
                                            Profile
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={()=>navigate('/dashboard/your-blog')}>
                                            <PiGithubLogoLight />
                                            Your Blog
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={()=>navigate('/dashboard/comments')}>
                                            <TfiCommentsSmiley />
                                            Comments
                                            <DropdownMenuShortcut>⌘+B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={()=>navigate('/dashboard/write-blog')}>
                                            <TfiWrite />
                                            Write Blog
                                            <DropdownMenuShortcut>⌘+N</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <IoMdLogOut />
                                            Log out
                                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <Button onClick={handleLogout}>Logout</Button>
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