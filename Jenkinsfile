pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                sh 'docker build -t jerrin1012/saucin-backend:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push jerrin1012/saucin-backend:latest
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ec2-user@3.109.184.113 '
                            docker pull jerrin1012/saucin-backend:latest &&
                            docker stop saucin-backend || true &&
                            docker rm saucin-backend || true &&
                            docker run -d -p 8000:8000 --name saucin-backend jerrin1012/saucin-backend:latest
                        '
                    '''
                }
            }
        }
    }
}
