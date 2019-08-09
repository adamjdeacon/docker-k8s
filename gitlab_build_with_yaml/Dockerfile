ARG PARENT_IMG
FROM $PARENT_IMG

ENV GATSBY_TELEMETRY_DISABLED=1

# Install libglvnd-glx
RUN yum -y install libglvnd-glx libXi && yum clean all

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm -g install gatsby-cli

COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

# Build static files
RUN npm run build 

# serve on port 8080
CMD ["gatsby", "serve", "--verbose", "--prefix-paths", "-p", "8080", "--host", "0.0.0.0"]
