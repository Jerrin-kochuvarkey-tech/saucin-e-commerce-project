pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin'
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Clone Frontend') {
            steps {
                dir('frontend') {
                    git branch: 'frontend', url: 'https://github.com/Jerrin-kochuvarkey-tech/saucin-e-commerce-project.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Verify Build Output') {
            steps {
                dir('frontend') {
                    sh 'ls -lh dist' // replace with 'build' if using Create React App
                }
            }
        }
    }

    post {
        success {
            echo '✅ Frontend build completed successfully.'
        }
        failure {
            echo '❌ Frontend build failed.'
        }
    }
}

