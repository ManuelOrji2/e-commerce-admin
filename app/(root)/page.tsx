import { Button } from "@/components/ui/button";
// import Image from 'next/image'

export default function Home() {
	return (
		<div className="h-screen flex flex-col items-center justify-center bg-blue-950 text-white">
			<h1 className="text-2xl font-semibold">Hi Admin Dashboard</h1>
			<Button
				className="mt-2"
				size={"sm"}
				variant={"secondary"}
			>
				Click me
			</Button>
		</div>
	);
}
