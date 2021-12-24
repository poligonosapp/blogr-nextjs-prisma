 docker build -t aspnetapp .
 docker run -d -p 8080:80 --name poligonosapp-with-aspnet-core-react-redux aspnetapp
 docker inspect -f "{{ .NetworkSettings.Networks.nat.IPAddress }}" poligonosapp-with-aspnet-core-react-redux