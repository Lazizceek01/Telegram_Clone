'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { emailSchema } from '@/lib/validation'

type SignInValues = z.infer<typeof emailSchema>

export default function SignIn() {
	const form = useForm<SignInValues>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: '',
		},
	})

	function onSubmit(values: SignInValues) {
		console.log(values)
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="text-sm font-medium">
					Email
				</label>
				<input
					id="email"
					type="email"
					placeholder="you@example.com"
					{...form.register('email')}
					className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
				/>
				{form.formState.errors.email && (
					<p className="text-sm text-destructive">
						{form.formState.errors.email.message}
					</p>
				)}
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white hover:bg-blue-600 w-full rounded-md px-4 py-2 text-sm font-medium"
			>
				Continue
			</button>
		</form>
	)
}
