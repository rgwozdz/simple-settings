# simple-settings

# Developing
Build image with Docker:

```bash
$ docker build -t settings-node .
```
Run the container and get in there to dev/test:

```bash
$ docker run --rm -it --name simplesettings -v /Users/rgwozdz/repos/simple-settings:/usr/src settings-node /bin/bash
```