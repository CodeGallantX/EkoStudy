// Download script
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/data/pdf-note/CHM101.pdf';
    link.download = 'CHM101.pdf';  // Specify the filename for download
    link.click();

    console.log("Note downloaded successfully!");
});
