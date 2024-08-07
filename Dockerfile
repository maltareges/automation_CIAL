FROM cypress/browsers:node-20.16.0-chrome-127.0.6533.88-1-ff-128.0.3-edge-127.0.2651.74-1
FROM cypress/base:20.16.0

WORKDIR /tests

COPY .package.json .
COPY .cypress.config.js .
COPY .cypress ./cypress

RUN npm install

CMD ["npx", "cypress", "run"]