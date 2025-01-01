export const subjects = {
    books: {
        1: [
            { id: 1, name: "Engineering Mathematics-I" },
            { id: 2, name: "Engineering Physics" },
            { id: 3, name: "Engineering Chemistry" },
            { id: 4, name: "Basic Electrical Engineering" },
            { id: 5, name: "Engineering Graphics" }
        ],
        2: [
            { id: 1, name: "Engineering Mathematics-II" },
            { id: 2, name: "Programming in C" },
            { id: 3, name: "Basic Electronics" },
            { id: 4, name: "Environmental Science" },
            { id: 5, name: "Professional Communication" }
        ],
        3: [
            { id: 1, name: "Data Structures" },
            { id: 2, name: "Digital Electronics" },
            { id: 3, name: "Object-Oriented Programming" },
            { id: 4, name: "Computer Organization" },
            { id: 5, name: "Discrete Mathematics" }
        ],
        4: [
            { id: 1, name: "Database Management Systems" },
            { id: 2, name: "Operating Systems" },
            { id: 3, name: "Computer Networks" },
            { id: 4, name: "Theory of Computation" },
            { id: 5, name: "Software Engineering" }
        ],
        5: [
            { id: 1, name: "Artificial Intelligence" },
            { id: 2, name: "Web Technologies" },
            { id: 3, name: "Compiler Design" },
            { id: 4, name: "Computer Graphics" },
            { id: 5, name: "Cloud Computing" }
        ],
        6: [
            { id: 1, name: "Machine Learning" },
            { id: 2, name: "Information Security" },
            { id: 3, name: "Mobile Computing" },
            { id: 4, name: "Data Mining" },
            { id: 5, name: "Distributed Systems" }
        ],
        7: [
            { id: 1, name: "Big Data Analytics" },
            { id: 2, name: "Internet of Things" },
            { id: 3, name: "Natural Language Processing" },
            { id: 4, name: "Blockchain Technology" },
            { id: 5, name: "Deep Learning" }
        ],
        8: [
            { id: 1, name: "Quantum Computing" },
            { id: 2, name: "Robotics" },
            { id: 3, name: "Edge Computing" },
            { id: 4, name: "Virtual Reality" },
            { id: 5, name: "Project Management" }
        ]
    },
    notes: {
        // Mirror the same structure for notes
        1: [
            { id: 1, name: "Mathematics-I Notes" },
            { id: 2, name: "Physics Notes" },
            { id: 3, name: "Chemistry Notes" },
            { id: 4, name: "Electrical Notes" },
            { id: 5, name: "Graphics Notes" }
        ],
        // ... (similar structure for semesters 2-8)
    }
};

export const premiumCourses = [
    {
        category: "Ethical Hacking",
        courses: [
            { name: "Complete Ethical Hacking Bootcamp", duration: "40 hours", rating: 4.9 },
            { name: "Network Security Masterclass", duration: "35 hours", rating: 4.8 },
            { name: "Web Application Penetration Testing", duration: "30 hours", rating: 4.7 }
        ]
    },
    {
        category: "Programming",
        courses: [
            { name: "Complete DSA Course", duration: "45 hours", rating: 4.9 },
            { name: "Full Stack Development", duration: "60 hours", rating: 4.8 },
            { name: "System Design Masterclass", duration: "25 hours", rating: 4.9 }
        ]
    },
    {
        category: "Cybersecurity",
        courses: [
            { name: "Advanced Cybersecurity", duration: "50 hours", rating: 4.8 },
            { name: "Malware Analysis", duration: "30 hours", rating: 4.7 },
            { name: "Digital Forensics", duration: "35 hours", rating: 4.8 }
        ]
    }
];