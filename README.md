# Bhatti_Amon_coding_assignment12

This repository contains a UI component library/toolkit built with React and Storybook.

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
    docker build -t Bhatti_Amon_coding_assignment12 .
    ```
3.  **Run the Docker container:**
    ```bash
    docker run -d -p 8083:80 --name Bhatti_Amon_coding_assignment12 Bhatti_Amon_coding_assignment12
    ```
    - The `-p 8083:80` flag maps port **8083** on your computer to port 80 inside the container.
    - The `--name` flag sets the required container name.

4.  **Access the site:**
    Open your web browser and navigate to `http://localhost:8083` or `http://127.0.0.1:8083`.

### Stopping the Container

To stop and remove the container, run these commands:
```bash
docker stop Bhatti_Amon_coding_assignment12
docker rm Bhatti_Amon_coding_assignment12