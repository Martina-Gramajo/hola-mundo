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
        stage('Pruebas') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Despliegue') {
            steps {
                script {
                    sh 'echo "Desplegando la aplicación..."'
                    // Comando para desplegar la aplicación
                    sh 'cp -r dist/* /ruta/al/directorio/de/despliegue/'
                }
            }
        }
    }
}
