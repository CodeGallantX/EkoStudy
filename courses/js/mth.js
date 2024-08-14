// Download script
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/data/pdf-note/MTH101.pdf';
    link.download = 'MTH101.pdf';  // Specify the filename for download
    link.click();

    console.log("Note downloaded successfully!");
});
