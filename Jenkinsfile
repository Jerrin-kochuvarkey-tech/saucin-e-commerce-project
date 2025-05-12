pipeline {
    agent any  // This will use the default agent
    environment {
        VIRTUAL_ENV = 'venv'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Create and activate virtual environment
                    sh 'python3 -m venv ${VIRTUAL_ENV}'
                    sh 'source ${VIRTUAL_ENV}/bin/activate'
                    // Install required packages
                    sh 'pip install -r requirements.txt'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'python manage.py test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t jerrin1012/saucin-backend:latest .'
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials-id') {
                        sh 'docker push jerrin1012/saucin-backend:latest'
                    }
                }
            }
        }
    }
}
