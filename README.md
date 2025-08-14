# Bhatti_Amon_coding_assignment13

This repository contains a UI component library with code quality checks implemented using Husky and GitHub Actions.

## Getting Started

Follow these instructions to get the web application running on your local machine using Docker.

### Prerequisites

You need to have Docker installed on your system.

### Running the Application

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-github-username/your-repo-name.git](https://github.com/your-github-username/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Build the Docker image:**
    ```bash
    docker build -t Bhatti_Amon_coding_assignment13 .
    ```
3.  **Run the Docker container:**
    ```bash
    docker run -d -p 8018:80 --name Bhatti_Amon_coding_assignment13 Bhatti_Amon_coding_assignment13
    ```
    - The `-p 8018:80` flag maps port **8018** on your computer to port 80 inside the container.
    - The `--name` flag sets the required container name.

4.  **Access the site:**
    Open your web browser and navigate to `http://localhost:8018` or `http://127.0.0.1:8018`.

### Stopping the Container

To stop and remove the container, run these commands:
```bash
docker stop Bhatti_Amon_coding_assignment13
docker rm Bhatti_Amon_coding_assignment13