import { init3DScene } from './3dScene.js';
import { premiumCourses } from './data.js';

// Initialize 3D scene
init3DScene();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Populate premium courses
const courseCategories = document.querySelector('.course-categories');
if (courseCategories) {
    premiumCourses.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'course-category';
        
        categorySection.innerHTML = `
            <h3>${category.category}</h3>
            <div class="course-grid">
                ${category.courses.map(course => `
                    <div class="course-card">
                        <div class="course-content">
                            <h3>${course.name}</h3>
                            <div class="course-meta">
                                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                                <span><i class="fas fa-star"></i> ${course.rating}</span>
                            </div>
                            <button class="enroll-button">Enroll Now</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        courseCategories.appendChild(categorySection);
    });
}