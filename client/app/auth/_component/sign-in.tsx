'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { emailSchema } from '@/lib/validation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

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
				<Label htmlFor="email">
					Email
				</Label>
				<Input
					id="email"
					type="email"
					placeholder="you@example.com"
					{...form.register('email')}
				/>
				<p className="text-xs text-muted-foreground">
					This is the email address used for your Telegram account.
				</p>
				{form.formState.errors.email && (
					<p className="text-sm text-destructive">
						{form.formState.errors.email.message}
					</p>
				)}
			</div>
			<Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 w-full" size={"lg"}>
				Continue
			</Button>
		</form>
	)
}

