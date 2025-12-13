import { useState } from "react";

function NotFound() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div style={{
            padding: "60px",
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "left",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
            
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                Contact Me
            </h1>

            <p style={{ textAlign: "center", color: "#444", marginBottom: "30px" }}>
                Feel free to reach out for collaborations, questions, or opportunities.
            </p>

            {/* Name Field */}
            <label style={{ fontWeight: "bold" }}>Namw:</label>
            <input
                type="text"
                value={name}
                placeholder="Your full name"
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
            />

            {/* Email Field */}
            <label style={{ fontWeight: "bold", marginTop: "15px" }}>Email Address:</label>
            <input
                type="email"
                value={email}
                placeholder="Jhon123@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
            />

            {/* Message Field */}
            <label style={{ fontWeight: "bold", marginTop: "15px" }}>Message:</label>
            <textarea
                value={message}
                placeholder="Write your message..."
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                style={{ ...inputStyle, resize: "none" }}
            ></textarea>

            <button
                style={{
                    marginTop: "25px",
                    padding: "12px 20px",
                    width: "100%",
                    background: "#0d6efd",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                Send Message
            </button>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
};

export default NotFound;
