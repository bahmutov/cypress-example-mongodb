# cypress-example-mongodb

Run MongoDB locally via Docker, [reference](https://www.code4it.dev/blog/run-mongodb-on-docker)

Pull the Mongo Docker image to be available locally

```shell
docker pull mongo
```

```shell
docker run -d --name mongo-on-docker \
  -p 27888:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo
```

Using [Studio 3T](https://studio3t.com/) to explore the local Mongo DB
