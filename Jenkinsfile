pipeline {
    agent any

    stages {
        stage('Compilación') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build image') {
            steps {
                script {
                    sh 'echo "Creando imagen en Docker..."'
                    sh 'docker build -t hola-mundo1 .'
                }
            }
        }
        stage('Run image') {
            steps {
                script {
                    sh 'echo "Creando contenedor de la imagen en Docker..."'
                    sh 'docker run -d -p 8086:8086 hola-mundo1'
                }
            }
        }
        stage('Test App') {
            steps {
                script {
                    sh 'echo "Testeando la aplicación..."'
                    // Comando para desplegar la aplicación
                    sh 'node test-server.js'
                }
            }
        }
    }
}
