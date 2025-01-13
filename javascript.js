// Beispiel-Daten für Kandidaten (diese könnten später aus einer Datenbank kommen)
const candidates = [
    {
        name: "Max Mustermann",
        position: "Softwareentwickler",
        skills: ["JavaScript", "React", "Node.js"],
        email: "max.mustermann@example.com"
    },
    {
        name: "Maria Musterfrau",
        position: "Marketing-Managerin",
        skills: ["SEO", "Content Creation", "Social Media"],
        email: "maria.musterfrau@example.com"
    }
];

// Funktion, um Kandidaten anzuzeigen
function displayCandidates() {
    const candidateListDiv = document.getElementById("candidate-list");
    candidateListDiv.innerHTML = ""; // Leert die Liste, bevor neue Kandidaten hinzugefügt werden

    candidates.forEach(candidate => {
        const candidateDiv = document.createElement("div");
        candidateDiv.classList.add("candidate");

        candidateDiv.innerHTML = `
            <h3>${candidate.name}</h3>
            <p><strong>Position:</strong> ${candidate.position}</p>
            <p><strong>Skills:</strong> ${candidate.skills.join(", ")}</p>
            <p><strong>Email:</strong> <a href="mailto:${candidate.email}">${candidate.email}</a></p>
            <button onclick="contactCandidate('${candidate.name}')">Kontaktieren</button>
        `;

        candidateListDiv.appendChild(candidateDiv);
    });
}

// Funktion, um einen Kandidaten zu kontaktieren (zeigt einfach eine Nachricht)
function contactCandidate(candidateName) {
    alert(`Du hast ${candidateName} kontaktiert!`);
}

// Kandidaten beim Laden der Seite anzeigen
window.onload = displayCandidates;
