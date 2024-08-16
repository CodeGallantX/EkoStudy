document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let query = document.getElementById('search-query').value.toLowerCase();
    let courses = document.querySelectorAll('.course-item');

    courses.forEach(function(course) {
        let courseName = course.getAttribute('data-course-name').toLowerCase();
        if (courseName.includes(query)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
});
