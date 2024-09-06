import { env } from '$env/dynamic/private';
export async function POST({ request }) {
	const { files, fileKeys, customIds } = await request.json();

	const response = await fetch('https://api.uploadthing.com/v6/deleteFiles', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Uploadthing-Api-Key': env.UPLOADTHING_SECRET
		},
		body: JSON.stringify({
			files,
			fileKeys,
			customIds
		})
	});

	const data = await response.json();
	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	});
}
