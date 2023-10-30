# Docker Containers for development

Mongodb, /frontend (nextjs), /backend (fastapi)
are setup with live reloading when a file is changed
on the local filesystem. Docker mounts directories /frontend and /backend to the instanced image when docker-compose is used.

Main commands:

docker-compose up
docker-compose up --build
#this will partially rebuild containers that have changed

docker-compose down -v
#this will remove the containers and attached volumes after hitting ctrl-c in the terminal

# References

On how Docker builds its containers:
https://docs.docker.com/build/guide/
