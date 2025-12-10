import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../datasource/api-projects";

export default function AddProjects() {
    const [project, setProject] = useState({
        title: "",
        description: "",
        image: "",
        link: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProject(project);
        navigate("/projects/list"); // Redirect after saving
    };

    return (
        <div className="container mt-4">
            <h2>Add New Project</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    placeholder="Project Title"
                    required
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    className="form-control mb-2"
                    placeholder="Project Description"
                    required
                    onChange={handleChange}
                ></textarea>

                <input
                    type="text"
                    name="image"
                    className="form-control mb-2"
                    placeholder="Image URL (optional)"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="link"
                    className="form-control mb-2"
                    placeholder="GitHub / Project Link (optional)"
                    onChange={handleChange}
                />

                <button className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>
    );
}
