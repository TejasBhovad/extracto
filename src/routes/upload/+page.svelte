<script>
	import '@uploadthing/svelte/styles.css';
	import FileOptions from '../../components/file-options.svelte';
	import { createUploader } from '$lib/utils/uploadthing';
	import { UploadDropzone } from '@uploadthing/svelte';
	// import { PUBLIC_TEMP_UPLOAD_URL, PUBLIC_DEV_MODE } from '$env/static/public';

	const categories = ['text', 'pdf'];
	let selectedCategory = 'pdf';
	let uploadeFileName = '';
	let uploadedFileKey = '';
	let uploadedFileUrl = '';

	const uploader = createUploader('pdfUploader', {
		onClientUploadComplete: (res) => {
			console.log(`onClientUploadComplete`, res);
			// alert('Upload Completed');
			uploadedFileUrl = res[0]?.url || '';
			uploadeFileName = res[0]?.name || '';
			uploadedFileKey = res[0]?.key || '';
		},
		onUploadError: (error) => {
			alert(`ERROR! ${error.message}`);
		}
	});

	async function deleteFiles() {
		const response = await fetch('/api/delete', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				files: [], // Add your file names here
				fileKeys: [uploadedFileKey],
				customIds: [] // Add your custom IDs here
			})
		});

		const data = await response.json();
		console.log(data); // Handle the response from the API
	}

	async function processFile() {
		console.log('Processing file...', uploadedFileUrl);
		console.log('Selected Category:', selectedCategory);

		if (selectedCategory === 'text') {
			const apiUrl = `https://pdf-highlights.vercel.app/api/generate-pdf?pdf_path=${uploadedFileUrl}`;
			try {
				const response = await fetch(apiUrl);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const blob = await response.blob();
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = uploadeFileName.replace('.pdf', '_highlighted.pdf');
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
				alert('File downloaded successfully', uploadeFileName);
			} catch (error) {
				console.error('Error processing file:', error);
				alert(`ERROR! ${error.message}`);
			} finally {
				await deleteFiles();
			}
		} else if (selectedCategory === 'pdf') {
			const apiUrl = `https://pdf-highlights.vercel.app/api/get-highlighted-page?pdf_path=${uploadedFileUrl}`;
			try {
				const response = await fetch(apiUrl);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const blob = await response.blob();
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = uploadeFileName.replace('.pdf', '_highlighted_page.pdf');
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
				alert('File downloaded successfully');
			} catch (error) {
				console.error('Error processing file:', error);
				alert(`ERROR! ${error.message}`);
			} finally {
				await deleteFiles();
			}
		}
	}
</script>

<div class="flex h-full w-full -translate-y-8 flex-col items-center justify-center p-8 sm:p-2">
	<h1
		class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text py-4 text-3xl font-bold text-transparent"
	>
		Upload PDF files
	</h1>
	<div
		class="card flex h-auto max-h-[450px] w-full max-w-[450px] flex-col rounded-lg bg-white shadow-sm transition-all sm:w-2/3"
	>
		<FileOptions
			{categories}
			{selectedCategory}
			on:categoryChange={(event) => (selectedCategory = event.detail)}
		/>
		<div class="aspect-square w-full px-4 py-2">
			{#if uploadedFileUrl}
				<iframe
					src={uploadedFileUrl}
					width="100%"
					style="border:none;"
					title="PDF Viewer"
					class="h-full w-full"
				></iframe>
			{:else}
				<UploadDropzone
					{uploader}
					class="flex h-full w-full items-center justify-center rounded-md"
				/>
			{/if}
		</div>
		<div class="px-4 py-4">
			<button
				class="w-full rounded-md bg-blue-500 py-2 text-white shadow-md hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-500"
				on:click={processFile}
				disabled={uploadedFileUrl === ''}
			>
				Process
			</button>
		</div>
	</div>
</div>
<a href="/" class="absolute bottom-0 w-full py-4 text-center text-lg font-semibold underline"
	>Back to Home</a
>
