## Pre-requisite(s)

The only prerequisite for running SonarQube is to have Java(Oracle JRE or openJDK 8) install on your machine.

For more details: `https://docs.sonarqube.org/latest/requirements/requirements/`

## Download below software(s)
1. LTS version of sonarqube.
   For ref: `https://www.sonarqube.org/downloads/`
2. SonarQube-scanner based on your platform.
   For ref: `https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/`

## Steps to setup the sonarqube configuration properties
1. Once `SonarQube-scanner` is downloaded, add below two properties in `sonar-scanner.properties`

   # default SonarQube Server
   sonar.host.url: http://localhost:9000
   # default source code encoding
   sonar.sourceEnCoding=UTF-8

   `sonar-scanner.properties` get under location
   <path_of_sonarqube_scanner/<choose_plateform>/conf> 

2. Create a `sonar-project.properties` file in root location of your nodejs app.
3. Add below configuration properties in above created file:
   # required metadata
   sonar.projectKey=<preferrable_project_name>
   sonar.projectVerson=<version>
   sonar.sourceEncoding=< source code incoding>

   # path to source directories
   sonar.source=<your_node_app_folder_name> 

   # excludes
   sonar.exclusion=<files or folders which you want to exclude>

   #coverage reporting
   sonar.javascript.lcov.reportPaths=<code coverage location>

   `NOTE:`: These are the required for sonar-scanner to analyaze and generate the report accordingly.

## start the sonarqube server
   Go SonarQube's downloaded location, and run below command:

   $./sonar.sh --help
   $./sonar.sh --start

## Run the sonar-scanner
   Got to root directory of your project folder where you have created the `sonar-projects.properties` file and run the below command:
   <root of your project>$sonar-scanner

## Access the generated report to analyaze further
1. Get the host url which you have set in the configuration and try accessing it
2. Default username and password is: admin/admin

   `For Example: http://localhost:9000/dashboard?id=<project_key>`