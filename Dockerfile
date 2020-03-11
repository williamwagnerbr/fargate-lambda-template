FROM node:12.16.1
#RUN apt-get update && \
#    apt-get install python-dev python-pip -y && \
#    apt-get install node && \
#    apt-get clean
#RUN pip install awscli
RUN node -v
RUN npm -v
WORKDIR /tmp/workdir
COPY ./function /tmp/workdir
ENTRYPOINT node server.js