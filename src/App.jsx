import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [selectedProjectState, setSelectedProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const [showMenuProjects, setShowMenuProjects] = useState(false);



  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setSelectedProjectState((prevState) => ({
      ...prevState,
      projects: projects,
      tasks: tasks,
    }));
  }, []);


  function handleShowProjects() {
    setShowMenuProjects((prevState) => !prevState);
  }


  function handleShowContent() {
    setSelectedProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
    setShowMenuProjects(false);
  }

  function handleSelectProject(id) {
    setSelectedProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
    setShowMenuProjects(false);
  }

  function handleCancelBtn() {
    setSelectedProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddTask(name) {
    const newTask = {
      id: Math.random(),
      projectId: selectedProjectState.selectedProjectId,
      name: name,
    };

    // Get existing tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Filter tasks based on the selected project
    const projectTasks = tasks.filter(
      (task) => task.projectId === selectedProjectState.selectedProjectId
    );

    // Add new task to the list
    projectTasks.push(newTask);

    // Update tasks array for the selected project
    tasks = tasks.filter((task) => task.projectId !== selectedProjectState.selectedProjectId);
    tasks.push(...projectTasks);

    // Save updated tasks list to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));


    setSelectedProjectState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  }


  function handleAddProject(name, description, date) {
    const newProject = {
      id: Math.random(),
      name: name,
      description: description,
      date: date,
    };

    // Get existing projects from local storage
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Add new project to the list
    projects.push(newProject);

    // Save updated projects list to local storage
    localStorage.setItem('projects', JSON.stringify(projects));

    setSelectedProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: projects,
    }));
  }

  function handleDeleteTask(id) {

    // Get the updated list of tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Filter out the deleted task
    tasks = tasks.filter((task) => task.id !== id);

    // Save the updated list back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    setSelectedProjectState((prevState) => ({
      ...prevState,
      tasks: tasks,
    }));
  }

  function handleDeleteProject(id) {

    // Get the updated list of projects from local storage
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Filter out the deleted project
    projects = projects.filter((project) => project.id !== id);

    // Save the updated list back to local storage
    localStorage.setItem('projects', JSON.stringify(projects));

    setSelectedProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: projects,
    }));
  }

  const selectedProject = selectedProjectState.projects.find(
    (project) => project.id === selectedProjectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      handleDeleteProject={handleDeleteProject}
      projects={selectedProject}
      handleAddTask={handleAddTask}
      tasks={selectedProjectState.tasks}
      handleDeleteTask={handleDeleteTask}
      projectId={selectedProjectState.selectedProjectId}
    />
  );

  if (selectedProjectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleShowContent={handleShowContent} />;
  } else if (selectedProjectState.selectedProjectId === null) {
    content = (
      <Form
        handleAddProject={handleAddProject}
        handleCancelBtn={handleCancelBtn}
      />
    );
  }

  return (
    <main className="md:h-screen md:my-8 flex flex-col md:flex-row md:gap-6">
      <SideBar
        handleShowContent={handleShowContent}
        projects={selectedProjectState.projects}
        selectedProjectId={selectedProjectState.selectedProjectId}
        handleSelectProject={handleSelectProject}
        showMenuProjects={showMenuProjects}
        handleShowProjects={handleShowProjects}
      />
      <div className="max-w-[40rem] md:w-[40rem] md:mt-16">
        {content}
      </div>
    </main>
  );
}

export default App;
