FROM mongo
COPY /init/ /docker-entrypoint-initdb.d/
EXPOSE 27017
CMD ['mongod', '--auth']
