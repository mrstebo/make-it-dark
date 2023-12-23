#!/bin/bash

docker run -it --rm -v $PWD/public:/usr/local/apache2/htdocs -p 8080:80 httpd:2.4-alpine httpd-foreground
