import { otpSchema } from '@/lib/validation'
import { Input } from '@base-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import z from 'zod'

export default function Verify() {
	const form = useForm<z.infer<typeof otpSchema>>({
		resolver: zodResolver(otpSchema),
		defaultValues: {email: '', otp: ''},
	})

	return (
		<div className="w-full">
			<p className="text-center text-muted-foreground text-sm">
				We have sent you an email with a verification code tou your email address. Please enter the code below.
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
					<FormField
						control={form.control}
						name="otp"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="otp"
						render={({ field }) => (
							<FormItem>
								<FormLabel>One-Time password</FormLabel>
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InpitOTPSGroup>
											<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InpitOTPSGroup>
							</InputOTP>
						</FormControl>
					</FormItem>
				</form>
			</Form>
		</div>
	)
}

