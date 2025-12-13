import { useState } from "react";
import Projects from "../components/projects";

function Home() {

    const [showProjects, setShowProjects] = useState(false);

    return (
        <div style={{
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center"
        }}>

            {/* Professional Hero Section */}
            <section style={{ marginBottom: "50px" }}>
                <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
                    Welcome to My Portfolio
                </h1>

                <p style={{
                    fontSize: "18px",
                    color: "#555",
                    marginTop: "15px",
                    lineHeight: "1.6"
                }}>
                    I am a dedicated developer with experience in Java, C#, HTML, CSS,
                    JavaScript, and web development.  
                    I enjoy creating clean, scalable, and modern software solutions.
                </p>

                <div style={{ marginTop: "25px" }}>
                    <button
                        onClick={() => setShowProjects(true)}
                        style={{
                            padding: "12px 20px",
                            background: "#0d6efd",
                            color: "white",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        View My Projects
                    </button>
                </div>
            </section>

            {/* Skills Section */}
            <section style={{
                marginTop: "40px",
                padding: "20px",
                background: "#f8f9fa",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
                <h2>Skills</h2>
                <p style={{ color: "#555" }}>
                    Here are some technologies I work with:
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                    marginTop: "20px"
                }}>
                    {["Java", "C#", "JavaScript", "HTML & CSS", "React", "SQL"].map(skill => (
                        <div key={skill} style={{
                            padding: "10px 20px",
                            background: "white",
                            borderRadius: "8px",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                            fontWeight: "bold"
                        }}>
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects appear BELOW the button when clicked */}
            {showProjects && (
                <div style={{ marginTop: "40px" }}>
                    <Projects />
                </div>
            )}

        </div>
    );
}

export default Home;
