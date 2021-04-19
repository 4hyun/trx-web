# base image
FROM node:12

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json /usr/src/app/
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
RUN npm install
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
#RUN npm ci --only=production

# Copy local code to the container image.

RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]