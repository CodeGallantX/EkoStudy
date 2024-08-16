import lunr from 'lunr'; // Import Lunr.js

const courses = [
    { id: "1", category: "English", title: "Word-Formation Processes", lecturer: "Mr. Alabi" },
    { id: "2", category: "English", title: "Syllable", lecturer: "Mr. Alabi" },
    { id: "3", category: "English", title: "Morphology: Morphemes", lecturer: "Mr. Alabi" },
    { id: "4", category: "English", title: "Sentence", lecturer: "Mr. Alabi" },
    { id: "5", category: "Physics", title: "Kepler's Laws", lecturer: "Dr. Oyeleke" },
    { id: "6", category: "Physics", title: "Work, Energy and Power", lecturer: "Dr. Oyeleke" },
    { id: "7", category: "Physics", title: "Universal Gravitation", lecturer: "Dr. Oyeleke" },
    { id: "8", category: "Physics", title: "Linear momentum & collision", lecturer: "Dr. Oyeleke" },
    { id: "9", category: "Physics", title: "", lecturer: "Dr. Oyeleke" },
    { id: "10", category: "Biology", title: "Ecology", lecturer: "Dr. Sanyaolu V." },
    { id: "11", category: "Biology", title: "Genetics and Heredity", lecturer: "Dr. Sanyaolu V." },
    { id: "13", category: "Biology", title: "Cytology", lecturer: "Mr. Qozeem" },
    { id: "14", category: "Chemistry", title: "Reduction and Oxidation (Redox) Reaction", lecturer: "Mr. Damazio" },
    { id: "15", category: "Chemistry", title: "Chemical Equilibrium", lecturer: "Mr. Damazio" },
    // { id: "16", category: "Chemistry", title: "", lecturer: "Mr. Damazio" },
    // { id: "17", category: "Chemistry", title: "", lecturer: "Mr. Damazio" },
    { id: "18", category: "Chemistry", title: "Electrolysis", lecturer: "Mr. Damazio" },
    { id: "19", category: "Chemistry", title: "Mole Concept", lecturer: "Mr. Oshinowo" },
    { id: "20", category: "Chemistry", title: "Acids, Bases and Salts", lecturer: "Mr. Damazio" },
    { id: "21", category: "Mathematics", title: "Complex Numbers", lecturer: "Dr. Aribike" },
    { id: "22", category: "Mathematics", title: "Mathematical Induction", lecturer: "Dr. Aribike" },
    { id: "23", category: "Mathematics", title: "Differential Calculus (Differentiation)", lecturer: "Dr. Aribike" },
    { id: "24", category: "Mathematics", title: "Integral Calculus (Integration)", lecturer: "Dr. Aribike" },
    { id: "25", category: "Mathematics", title: "Limits", lecturer: "Dr. Aribike" },
    { id: "26", category: "Mathematics", title: "Partial Fractions", lecturer: "Dr. Akinyemi" },
    // Add more course data here
];


export const idx = lunr(function () {
    this.field('category');
    this.field('title');
    this.field('lecturer');

    courses.forEach(function (course) {
        this.add(course)
    }, this);
})

