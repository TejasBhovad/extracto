<script>
	import '@uploadthing/svelte/styles.css';
	import FileOptions from '../../components/file-options.svelte';
	import { createUploader } from '$lib/utils/uploadthing';
	import { UploadDropzone } from '@uploadthing/svelte';

	const categories = ['text', 'pdf'];
	let uploadedFileUrl = '';

	const uploader = createUploader('imageUploader', {
		onClientUploadComplete: (res) => {
			console.log(`onClientUploadComplete`, res);
			alert('Upload Completed');
			uploadedFileUrl = res[0]?.url || ''; // Store the uploaded file URL from the response
		},
		onUploadError: (error) => {
			alert(`ERROR! ${error.message}`);
		}
	});

	// Function that logs processing of the file
	function processFile() {
		console.log('Processing file...');
	}
</script>

<div class="flex h-full w-full -translate-y-8 flex-col items-center justify-center p-8 sm:p-2">
	<h1
		class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text py-4 text-3xl font-bold text-transparent"
	>
		Upload PDF files
	</h1>
	<div
		class="card flex h-3/4 max-h-[450px] w-full max-w-[450px] flex-col rounded-lg bg-white shadow-sm transition-all sm:w-2/3"
	>
		<FileOptions {categories} />
		<div class="h-full px-4">
			{#if uploadedFileUrl}
				<!-- Show the uploaded file -->
				<div class="uploaded-file">
					<p>Uploaded File:</p>
					<a href={uploadedFileUrl} target="_blank" class="text-blue-500 underline"
						>{uploadedFileUrl}</a
					>
				</div>
			{:else}
				<!-- Show the dropzone -->
				<UploadDropzone {uploader} />
			{/if}
		</div>
		<div class="px-4 py-4">
			<button
				class="w-full rounded-md bg-blue-500 py-2 text-white shadow-md hover:bg-blue-600"
				on:click={processFile}
			>
				Process
			</button>
		</div>
	</div>
</div>
<a href="/" class="absolute bottom-0 w-full py-4 text-center text-lg font-semibold underline"
	>Back to Home</a
>
