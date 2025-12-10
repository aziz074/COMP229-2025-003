let apiURL = import.meta.env.VITE_APP_APIURL;
import { getToken } from "../components/auth/auth-helper.js";

// Get all projects
export const listProjects = async () => {
    try {
        let res = await fetch(apiURL + "/api/projects");
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// Get one project
export const getProject = async (id) => {
    try {
        let res = await fetch(apiURL + "/api/projects/" + id);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// Create new project
export const createProject = async (project) => {
    try {
        let res = await fetch(apiURL + "/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + getToken(),
            },
            body: JSON.stringify(project),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// Update project
export const updateProject = async (id, project) => {
    try {
        let res = await fetch(apiURL + "/api/projects/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + getToken(),
            },
            body: JSON.stringify(project),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

// Delete project
export const deleteProject = async (id) => {
    try {
        let res = await fetch(apiURL + "/api/projects/" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + getToken(),
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};
