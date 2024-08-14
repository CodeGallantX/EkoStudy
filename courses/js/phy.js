// Download script
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/data/pdf-note/PHY101.pdf';
    link.download = 'PHY101.pdf';  // Specify the filename for download
    link.click();

    console.log("Note downloaded successfully!");
});
