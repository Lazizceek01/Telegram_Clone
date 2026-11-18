import React from 'react'
import { FaTelegram } from "react-icons/fa";

export default function page() {
	return (
		<div className="container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4">
			<FaTelegram  className="text-blue-500" size={120}/>
			<div>
				<h1 className="text-2xl font-bold">Telegram</h1>
			</div>
			<p className="text-center text-muted-foreground text-sm">
				Telegram is a messiging app with a focus on speed and security. It’s super-fast, simple and free.
			</p>
			
		</div>
	)
}
 