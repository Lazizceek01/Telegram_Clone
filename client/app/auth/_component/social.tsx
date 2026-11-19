import React from 'react'
import { Button } from "@/components/ui/button"
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function Social() {
	return (
		<div className="grid grid-cols-2 w-full gap-1">
			<Button className="bg-blue-500 text-white hover:bg-blue-600">
				<span>Sign up with google</span>
				<FaGoogle/>
			</Button>
			<Button variant="outline" className="bg-grey text-black hover:bg-black-300">
				<span>Sign up with github</span>
				<FaGithub/>
			</Button>
		</div>
	)
}

