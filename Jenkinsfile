pipeline {
  agent {
    docker {
        image 'node'
        args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }

  stages {
    stage('Initialize'){
      def dockerHome = tool 'myDocker'
      env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
