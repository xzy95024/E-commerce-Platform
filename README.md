
## Project Features 
Unified Overview

Customer Portal – Frontend for shopper-facing features

Admin Portal – Backend management platform

Frontend – UI layer built with Vue3 / Element-Admin / uni-app

Backend – Java-based microservices with Spring Cloud


## Tech Stack


### Backend
-Java17

-SpringBoot

-SpringCloud

-Nacos, OpenFeign, Gateway, LoadBalance

-MySQL

-Redis:

 -Stores user information and verification codes

 -Spring Cache

 -Caches category information

 -Uses hash type to store shopping cart data

-Docker

-Git

-Maven

-IDEA

-ThreadLocal

-EasyExcel

-AOP

 -MinIO

-Stores uploaded files

-Scheduled tasks

-AWS Cloud SMS
- 

### Frontend
-node16

-Element-Admin: Vue3 + ElementPlus

-ES6: Template literals, arrow functions

-Axios

-uni-app

## Setup local environment

- use `docker` install mysql & redis

### Install MySQL
```shell
# Pull Docker image (recommend v8)
docker pull mysql:8.0.30

# Simple startup
docker run -d --name spzx-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:8.0.30
# A common issue:
# After the container is created, connecting using localhost or 127.0.0.1 may fail.
# You must connect using the LAN IP obtained via ifconfig or ipconfig.

# Create a container with volumes  
# When recreating a new container, delete the original volume first,
# otherwise MySQL may not be accessible.
docker run -d --name mysql-spzx -p 3306:3306 -v mysql_data:/var/lib/mysql -v mysql_conf:/etc/mysql --restart=always --privileged=true -e MYSQL_ROOT_PASSWORD=root mysql:8.0.30

# Execute db_spzx.sql script
```

### Install Redis
```shell
#1 Pull image
docker pull redis:7.0.10

# Simple startup
docker run -d --name spzx-redis -p 6379:6379 redis:7.0.10

#2 If /var/lib/docker/volumes does not contain redis-config, create a volume  
# (Updated on 2024-10-20 14:21:01: No need to manually create; Docker auto-creates volumes)
docker volume create redis-config

#3 On the host, under /var/lib/docker/volumes/redis-config/_data/,  
# create a redis.conf file
vim redis.conf

# Content example:
# Enable persistence
appendonly yes
port 6379
# Set password if needed
# requirepass 1234
bind 0.0.0.0

#4 Create container
docker run -d -p 6379:6379 --restart=always \
-v redis-config:/etc/redis/config \
-v redis-data:/data \
--name redis-spzx redis:7.0.10 \
--requirepass root
# ⬆️ A password must be set to prevent attacks on public IP Redis instances.
# Do not add the last line below, or the container will restart in a loop:
# redis-server /etc/redis/config/redis.conf
```


