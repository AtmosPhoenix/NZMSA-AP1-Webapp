# NZMSA-AP1-Webapp

[See it in action!](https://ap1-msa-ghibliapp-2020.azurewebsites.net/)

# Pipeline description:

Basic react-app pipeline. The project is simple, for now. And dosen't need a complex pipeline. 

```
  - script: |
      cd $(rootDir)
      npm install
      npm install antd      <<< Modified the npm script to install the 'antd' ui library dependancy.
      npm run build
      cd ..
    displayName: 'npm install and build'
```
