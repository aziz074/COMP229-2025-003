import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProject, updateProject } from "../../datasource/api-projects";

export default function EditProjects() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState({
        title: "",
        description: "",
        image: "",
        link: ""
    });

    // Load existing project data
    useEffect(() => {
        async function fetchData() {
            const data = await getProject(id);
            setProject(data);
        }
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProject(id, project);
        navigate("/projects/list"); // redirect after saving
    };

    return (
        <div className="container mt-4">
            <h2>Edit Project</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    value={project.title}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    className="form-control mb-2"
                    value={project.description}
                    onChange={handleChange}
                ></textarea>

                <input
                    type="text"
                    name="image"
                    className="form-control mb-2"
                    value={project.image}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="link"
                    className="form-control mb-2"
                    value={project.link}
                    onChange={handleChange}
                />

                <button className="btn btn-warning w-100">
                    Update Project
                </button>
            </form>
        </div>
    );
}
