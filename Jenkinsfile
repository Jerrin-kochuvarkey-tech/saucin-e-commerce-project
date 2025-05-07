pipeline {
    agent any
    stages {
        stage('Clean & Install Dependencies') {
            steps {
                sh '''
                    rm -rf node_modules dist
                    npm install
                '''
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker Build & Push') {
            steps {
                sh 'docker build -t jerrin1012/saucin-frontend:latest .'
                withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
                    sh 'docker push jerrin1012/saucin-frontend:latest'
                }
            }
        }
        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['ec2-ssh']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@<EC2-IP> '
                        docker pull jerrin1012/saucin-frontend:latest &&
                        docker stop saucin-frontend || true &&
                        docker rm saucin-frontend || true &&
                        docker run -d -p 80:80 --name saucin-frontend jerrin1012/saucin-frontend:latest
                    '
                    '''
                }
            }
        }
    }
}


