pipeline {
    agent any

    environment {
        IMAGE_NAME = "jerrin1012/saucin-frontend"
        TAG = "latest"
        EC2_USER = "ec2-user"
        EC2_HOST = "65.2.131.22"
        DOCKER_CONTAINER_NAME = "saucin-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    retry(3) {
                        sh 'npm config set fetch-retries 5'
                        sh 'npm config set fetch-retry-mintimeout 20000'
                        sh 'npm config set fetch-retry-maxtimeout 120000'
                        sh 'npm config set registry https://registry.npmmirror.com'
                        sh 'npm cache clean --force'
                        sh 'npm install --legacy-peer-deps'
                    }
                }
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    sh "docker build -t $IMAGE_NAME:$TAG ."
                    sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD"
                    sh "docker push $IMAGE_NAME:$TAG"
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    sh """
                    ssh -o StrictHostKeyChecking=no $EC2_USER@$EC2_HOST << 'EOF'
                    docker pull $IMAGE_NAME:$TAG
                    docker stop $DOCKER_CONTAINER_NAME || true
                    docker rm $DOCKER_CONTAINER_NAME || true
                    docker run -d --name $DOCKER_CONTAINER_NAME -p 80:80 $IMAGE_NAME:$TAG
                    EOF
                    """
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed.'
        }
        success {
            echo 'Build and deployment successful!'
        }
    }
}

