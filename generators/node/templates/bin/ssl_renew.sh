#!/bin/bash

COMPOSE="docker-compose -f docker-compose.yml -f docker-compose.prod.yml"

$COMPOSE run certbot renew
$COMPOSE restart webserver
