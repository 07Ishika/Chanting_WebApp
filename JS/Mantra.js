// Data for dynamic content
const contentData = [
    {
        title: "Awaken Yourself",
        subtitle: "Learn, practice, and experience the power of Vedic traditions.",
        section: "JAPA",
        description: "Chant mantras. Count your rounds or do it on a timer.",
        image: "../Asserts/japa img.png" // Correct image path
    },
    {
        title: "Meditate Deeply",
        subtitle: "Experience stillness and inner peace through meditation.",
        section: "Meditation",
        description: "Focus on your breath to reach a calm state of mind.",
        image: "../Asserts/law of attraction img.png" // Replace with actual path
    },
    {
        title: "Explore Wisdom",
        subtitle: "Dive into ancient scriptures and teachings.",
        section: "Wisdom",
        description: "Understand the profound knowledge of ancient texts.",
        image: "../Asserts/healer anxiety img.png" // Replace with actual path
    },
    {
        title: "Embrace Silence",
        subtitle: "Find tranquility by practicing moments of silence.",
        section: "Silence",
        description: "Silence enhances clarity and spiritual awareness.",
        image: "../Asserts/stress relief.png" // Replace with actual path
    }
];

let currentIndex = 0;

function changeContent() {
    // Increment the index and loop back to the start if necessary
    currentIndex = (currentIndex + 1) % contentData.length;

    // Update the content dynamically
    document.getElementById("title").textContent = contentData[currentIndex].title;
    document.getElementById("subtitle").textContent = contentData[currentIndex].subtitle;
    document.getElementById("section-title").textContent = contentData[currentIndex].section;
    document.getElementById("description").textContent = contentData[currentIndex].description;

    // Update the image dynamically
    const imageElement = document.getElementById("dynamic-image");
    imageElement.src = contentData[currentIndex].image;

    // Add alt text for accessibility
    imageElement.alt = contentData[currentIndex].title;
}
