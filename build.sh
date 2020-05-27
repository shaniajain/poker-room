docker build --file Dockerfile --tag=rajnikhildocker/poker:latest --rm=true .
docker push rajnikhildocker/poker:latest

#Running
docker run --name poker -d -p 80:3000 rajnikhildocker/poker:latest
