import React from 'react';

const Skills = () => {
    const skills = [
        {
            name: "JavaScript",
            description: "Learn the fundamentals of JavaScript, the programming language of the web.",
            level: "Beginner",
        },
        {
            name: "React",
            description: "Learn React, a popular library for building user interfaces.",
            level: "Intermediate",
        },
        {
            name: "Tailwind CSS",
            description: "Learn how to style your applications using Tailwind CSS.",
            level: "Beginner",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Skills to Learn</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">{skill.name}</h2>
                        <p className="text-gray-500 mb-4">{skill.level}</p>
                        <p className="text-gray-700">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
