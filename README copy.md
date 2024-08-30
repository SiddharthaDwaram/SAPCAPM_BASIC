_schema-version: 3.3.0
ID: projects
description: A simple CAP project.
version: 1.0.0
modules:
  - name: projects-srv
    type: nodejs
    path: gen/srv
    requires:
      - name: projects-db
    provides:
      - name: srv-api
        properties:
          srv-url: ${default-url}
    parameters:
      buildpack: nodejs_buildpack
      readiness-health-check-http-endpoint: /health
      readiness-health-check-type: http
    build-parameters:
      builder: npm
  - name: projects-db-deployer
    type: hdb
    path: db
    requires:
      - name: projects-db
    parameters:
      buildpack: nodejs_buildpack
resources:
  - name: projects-db
    type: com.sap.xs.hdi-container
    parameters:
      service: hanatrial
      service-plan: hdi-shared
    properties:
      hdi-service-name: ${service-name}
parameters:
  enable-parallel-deployments: true
build-parameters:
  before-all:
    - builder: custom
      commands:
        - npm ci
        - npx cds build --production
