
pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = "jerrin1012/saucin-backend"
        GIT_REPO_URL = "https://github.com/Jerrin-kochuvarkey-tech/saucin-e-commerce-project.git"
        BACKEND_BRANCH = "backend"  // Branch name for backend
    }

    stages {
        stage('Clone Backend Repository') {
            steps {
                script {
                    // Clone the backend branch
                    git branch: BACKEND_BRANCH, url: GIT_REPO_URL
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Python dependencies (if not using Docker for dependencies)
                    sh 'python3 -m venv venv'
                    sh '. venv/bin/activate && pip install -r requirements.txt'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests using Django's test management command
                    sh '. venv/bin/activate && python manage.py test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in the project root
                    sh 'docker build -t ${DOCKER_IMAGE_NAME}:latest .'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Push the Docker image to Docker Hub
                    sh 'docker push ${DOCKER_IMAGE_NAME}:latest'
                }
            }
        }
    }

    post {
        always {
            // Clean up after the pipeline run
            cleanWs()
        }
    }
}
