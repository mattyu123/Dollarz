**Troubleshooting**

if having permission issues (*nix)

- add your user to the docker group

sudo usermod -aG docker $USER

- apply the changes by either logging out our running

newgrp docker


if you would like the see the containers that
are running:

docker-compose logs <service>
