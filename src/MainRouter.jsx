import { Routes, Route } from "react-router-dom";
import Projects from "./components/projects";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Services from "./components/Services";
import ListInventory from "./components/inventory/ListInventory";
import AddInventory from "./components/inventory/AddInventory";
import EditInventory from "./components/inventory/EditInventory";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

// ⭐ NEW IMPORTS for Projects CRUD
import ListProjects from "./components/projects/ListProjects";
import AddProjects from "./components/projects/AddProjects";
import EditProjects from "./components/projects/EditProjects";

function MainRouter() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/list" element={<ListProjects />} />
                <Route path="/projects/add" element={<AddProjects />} />
                <Route path="/projects/edit/:id" element={<EditProjects />} />
                
                <Route path="/services" element={<Services />} />
                <Route path="/users/signin" element={<Signin />} />
                <Route path="/users/signup" element={<Signup />} />

                <Route path="/inventory/list" element={<ListInventory />} />
                <Route path="/inventory/add" element={<AddInventory />} />
                <Route path="/inventory/edit/:id" element={<EditInventory />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter;
