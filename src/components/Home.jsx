import { useState } from "react";

function Home() {

    const [showProjects, setShowProjects] = useState(false);

    const projects = [
        { title: "Java Application", description: "Backend logic, OOP structure, and processing." },
        { title: "C# Desktop App", description: "Windows Forms / WPF application for productivity." },
        { title: "React Website", description: "Fully responsive modern UI designed in React." },
        { title: "SQL Database Project", description: "Database design, queries, and normalization." }
    ];

    return (
        <div style={{
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center"
        }}>

            {/* Hero Section */}
            <section style={{ marginBottom: "40px" }}>
                <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
                    Welcome to My Portfolio
                </h1>

                <p style={{
                    fontSize: "18px",
                    color: "#555",
                    marginTop: "15px",
                    lineHeight: "1.6"
                }}>
                    I am a developer experienced in Java, C#, HTML, CSS, JavaScript, React, and SQL.
                    I enjoy creating modern, scalable, and high-quality applications.
                </p>

                <button
                    onClick={() => setShowProjects(!showProjects)}
                    style={{
                        padding: "12px 20px",
                        background: "#0d6efd",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "16px",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "20px"
                    }}
                >
                    View My Projects
                </button>
            </section>

            {/* Projects Section - appears only after clicking */}
            {showProjects && (
                <section style={{
                    marginTop: "40px",
                    padding: "20px",
                    background: "#f8f9fa",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}>
                    <h2>My Projects</h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                        marginTop: "20px"
                    }}>
                        {projects.map((project, index) => (
                            <div key={index} style={{
                                padding: "20px",
                                background: "white",
                                borderRadius: "10px",
                                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                                textAlign: "left"
                            }}>
                                <h3>{project.title}</h3>
                                <p style={{ color: "#555" }}>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}

export default Home;
