FROM ubuntu:18.04

# Install things with apt
RUN apt-get update && \
  apt-get -y --no-install-recommends install \
  	asciidoc \
    ca-certificates \
    curl \
    gnupg2

RUN bash -o pipefail -c "curl -L https://deb.nodesource.com/setup_10.x | bash" && \
  curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get -y install \
    nodejs \
    yarn \
    && \
	rm -rf /var/lib/apt/lists/*

RUN npm install -g @angular/cli
