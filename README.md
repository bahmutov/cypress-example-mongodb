# cypress-example-mongodb
> Example Cypress doing the API testing against Mongo

Read the blog post [Testing Mongo with Cypress](https://glebbahmutov.com/blog/testing-mongo-with-cypress/)

Run MongoDB locally via Docker, [reference](https://www.code4it.dev/blog/run-mongodb-on-docker)

Pull the Mongo Docker image to be available locally

```shell
docker pull mongo
```

```shell
docker run -d --name mongo-on-docker \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo
```

**Tip:** to stop and remove the container later use the following commands:

```
docker stop mongo-on-docker
docker rm mongo-on-docker
```

Using [Studio 3T](https://studio3t.com/) to explore the local Mongo DB
