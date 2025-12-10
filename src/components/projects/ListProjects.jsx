import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listProjects, deleteProject } from "../../datasource/api-projects";

export default function ListProjects() {
    const [projects, setProjects] = useState([]);

    // Load data from backend
    const loadData = async () => {
        const data = await listProjects();
        setProjects(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // Delete a project
    const remove = async (id) => {
        await deleteProject(id);
        loadData();
    };

    return (
        <div className="container mt-4">
            <h2>Projects List</h2>

            <Link to="/projects/add" className="btn btn-primary my-3">
                + Add New Project
            </Link>

            {projects.length === 0 && <p>No projects found.</p>}

            {projects.map((p) => (
                <div key={p.id} className="card p-3 mb-3 shadow-sm">
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>

                    {p.image && <img src={p.image} alt="" width="150" />}

                    <div className="mt-2">
                        <Link
                            to={`/projects/edit/${p.id}`}
                            className="btn btn-warning me-2"
                        >
                            Edit
                        </Link>

                        <button
                            className="btn btn-danger"
                            onClick={() => remove(p.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
