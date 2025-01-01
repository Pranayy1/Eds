import { subjects } from './data.js';
import { createSemesterGrid, showSubjects } from './semesterNavigation.js';

const semesterGrid = document.getElementById('semesterGrid');
const subjectsContainer = document.getElementById('subjectsContainer');
const subjectsGrid = document.getElementById('subjectsGrid');

// Create semester grid
createSemesterGrid(semesterGrid);

// Handle semester selection
semesterGrid.addEventListener('click', (e) => {
    const semesterCard = e.target.closest('.semester-card');
    if (!semesterCard) return;

    const semester = semesterCard.dataset.semester;
    showSubjects(subjects.notes, semester, subjectsGrid);
    subjectsContainer.classList.remove('hidden');
    
    // Scroll to subjects
    subjectsContainer.scrollIntoView({ behavior: 'smooth' });
});