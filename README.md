This is the repo for an article about Dockerising an Angular app check it out here: https://www.minibuilds.io/articles/2021-03-25-angular-nginx-docker/.

### Build the Angular project

```
ng build --prod
```

### Build the Docker image

```
docker build . -t minibuilds.io/angular-nginx-docker
```

### Run the Docker container

```
docker run --rm -p 80:80 minibuilds.io/angular-nginx-docker
```

Navigate to http://localhost/ to see it in action.