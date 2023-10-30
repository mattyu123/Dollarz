# README

This project contains boilerplate and the dependencies to run the finance app (codename to be determined).

## Quick setup

- install docker + docker-compose for your OS (https://docs.docker.com/engine/install/)
- create .env file (like in the .env.example file) - make sure credentials match that of the mongo_init.js
- in the terminal run:

docker-compose up

- to exit - hit ctrl-c in the terminal

docker-compose down

### Included Dependencies

**Backend**

- Mongodb server
- FastApi

Details:

- Redis, Mongodb, rethink are the default stable versions
- FastAPI + Celery are on Debian 12 , with python 3.11 based toolchain

**Frontend**

- Nodejs
- Nextjs (App router enabled)
- tailwindcss

Details:
- all are contained in one container
- Debian 12

## How to build Documentation

on a local machine (with python 3.11+) run:

pip install mkdocs
cd /Docs
mkdocs serve
