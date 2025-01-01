export function createSemesterGrid(container) {
    for (let i = 1; i <= 8; i++) {
        const card = document.createElement('div');
        card.className = 'semester-card';
        card.dataset.semester = i;
        
        card.innerHTML = `
            <h3>Semester ${i}</h3>
            <p>View all subjects</p>
        `;
        
        container.appendChild(card);
    }
}

export function showSubjects(subjects, semesterNum, container) {
    container.innerHTML = '';
    const semesterSubjects = subjects[semesterNum] || [];
    
    semesterSubjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        
        card.innerHTML = `
            <h3>${subject.name}</h3>
            <p>Click to view details</p>
        `;
        
        container.appendChild(card);
    });
}