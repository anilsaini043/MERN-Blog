import React from 'react'
import { Card } from './ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import userLogo from "../assets/user.jpg"
// Dialog
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from './ui/textarea'

const Profile = () => {
  return (
    <div className='pt-20 md:ml-[320px] md:h-screen'>
      <div className='max-w-6xl mx-auto mt-8'>
        <Card className="flex md:flex-row flex-col gap-10 p-6 md:p-10 dark:bg-gray-800 mx-4 md:mx-0">
          {/* Image section */}
          <div className='flex flex-col items-center justify-center md:w-[400px]'>
            <Avatar className='w-40 h-40 border-2'>
              <AvatarImage src={userLogo} />
            </Avatar>
            <h1 className='text-center font-semibold text-xl text-gray-700 dark:text-gray-300 my-3'>Mern Stack Developer</h1>
            <div className='flex gap-4 items-center'>
              <Link><FaFacebook className='w-6 h-6 text-gray-800 dark:text-gray-300'></FaFacebook></Link>
              <Link><FaLinkedin className='w-6 h-6 text-gray-800 dark:text-gray-300'></FaLinkedin></Link>
              <Link><FaGithub className='w-6 h-6 text-gray-800 dark:text-gray-300'></FaGithub></Link>
              <Link><FaInstagram className='w-6 h-6 text-gray-800 dark:text-gray-300'></FaInstagram></Link>
            </div>
          </div>
          {/* Info section */}
          <div>
            <h1 className='font-bold text-center md:text-start text-4xl mb-7'>Welcome User</h1>
            <p><span className='font-semibold'>Email :</span>anila@gmail.com</p>
            <div className='flex flex-col gap-2 items-start justify-start. my-5'>
              <Label>About Me</Label>
              <p className='border dark:border-gray-600 p-6 rounded-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius tenetur, aut et cum dolorem sunt dolores eaque officia quidem ipsa aperiam soluta recusandae quibusdam facilis nihil ullam exercitationem possimus? Nemo.
              </p>
            </div>
            {/* Dialog */}
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">Edit profile</DialogTitle>
                    <DialogDescription className="text-center">
                      Make changes to your profile here.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className='flex gap-2'>
                      <div className="grid gap-3">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="name" type="text" name="firstName" className="col-span-3 text-gray-500" placeholder="First Name" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" type="text" name="lastName" className="col-span-3 text-gray-500" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className='flex gap-2'>
                      <div className="grid gap-3">
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input id="facebook" type="text" name="facebook" className="col-span-3 text-gray-500" placeholder="Enter a URL" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input id="instagram" type="text" name="instagram" className="col-span-3 text-gray-500" placeholder="Enter a URL" />
                      </div>
                    </div>

                    <div className='flex gap-2'>
                      <div className="grid gap-3">
                        <Label htmlFor="linkedIn">LinkedIn</Label>
                        <Input id="linkedIn" type="text" name="linkedIn" className="col-span-3 text-gray-500" placeholder="Enter a URL" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="gitHub">GitHub</Label>
                        <Input id="gitHub" type="text" name="gitHub" className="col-span-3 text-gray-500" placeholder="Enter a URL" />
                      </div>
                    </div>

                    <div className='grid gap-2'>
                      <Label>Description</Label>
                      <Textarea id="bio" name="bio" placeholder="Enter a description" className="col-span-3 text-gray-500" />
                    </div>

                    <div className='grid gap-2'>
                      <Label>Picture</Label>
                      <Input id="file" type="file" accept="image/*" />
                    </div>

                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Profile