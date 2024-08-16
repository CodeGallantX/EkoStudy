import { idx } from './lunr-config';
import courses from './courses';


// Form Submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let query = document.getElementById('search-query').value;
    let results = idx.search(query);

    displayResults(results);    
})

function displayResults(results) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    if (results.length) {
        results.forEach(function(result) {
            let course = courses.find(c => c.id === result.ref);

            let courseElement = document.createElement('div');
            courseElement.classList.add('course-item');
            courseElement.innerHTML =  `
            <h3>${course.category}</h3>
            <by>${courses.title} by ${course.lecturer}</p> 
            `;
            container.appendChild(courseElement);
        });
    } else {
        container.innerHTML = `<p>No courses found</p>`
    }
}