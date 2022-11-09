import sonarqubeScanner from 'sonarqube-scanner';
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       token: 'sqp_6ad5283116922deffb2ea7051a1eb271426f8ebc',
       options : {
            'sonar.projectName': 'My App',
            'sonar.projectDescription': 'Description for "My App" project...',
            'sonar.sources': '.',
            'sonar.inclusions' : 'src/**', // Entry point of your 
            'sonar.tests': 'tests'
       }
     }, () => {});