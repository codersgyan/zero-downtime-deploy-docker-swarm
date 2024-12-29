## Making continuous requests

while true; do curl http://localhost:3000 && echo " - $(date)"; sleep 0.5; done

### Steps:

First, Make sure you enable the docker swarm mode.
`docker swarm init`

1. Build docker image
   `docker build -t my-express-app:1.3.0 .`

2. Deploy the application
   `docker stack deploy -c docker-compose.yaml myapp`

3. check service status
   `docker service ps myapp_express-app`

4. Scale application
   `docker service scale myapp_express-app=5`

5. leave swarm node

```
Copydocker swarm leave --force  # On manager node
# or
docker swarm leave         # On worker node
```
