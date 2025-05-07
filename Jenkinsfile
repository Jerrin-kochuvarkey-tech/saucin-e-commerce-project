pipeline {
    agent any
    stages {
        stage('Install Node.js') {
            steps {
                // Install Node.js version 16
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash'
                sh 'export NVM_DIR="$HOME/.nvm"'
                sh '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || return 1'
                sh 'nvm install 16'
                sh 'nvm use 16'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
                    ssh -o StrictHostKeyChecking=no ec2-user@3.109.184.113 '
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

