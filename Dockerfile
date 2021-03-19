FROM  node:14.16.0

WORKDIR /usr/src/hotels-backend

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]