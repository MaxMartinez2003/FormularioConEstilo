pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MaxMartinez2003/FormularioConEstilo.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                scp -r ./build/ user@server:/path/to/deploy/
                ssh user@server 'cd /path/to/deploy && ./deploy_script.sh'
                '''
            }
        }
    }
    post {
        success {
            mail to: 'your-email@example.com',
                 subject: "Successful Build: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "Good news, the build succeeded!"
            slackSend channel: '#deployments', message: "Successful Build: ${env.JOB_NAME} [${env.BUILD_NUMBER}]"
        }
        failure {
            mail to: 'your-email@example.com',
                 subject: "Failed Build: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "Unfortunately, the build failed. Please check the logs."
            slackSend channel: '#deployments', message: "Failed Build: ${env.JOB_NAME} [${env.BUILD_NUMBER}]"
        }
    }
}
