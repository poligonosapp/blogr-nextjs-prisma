 docker build -t aspnetapp .
 docker run -d -p 8080:80 --name PoligonosAppAWSLambda aspnetapp
 docker inspect -f "{{ .NetworkSettings.Networks.nat.IPAddress }}" PoligonosAppAWSLambda