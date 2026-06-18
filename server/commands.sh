#!/bin/sh

echo "🚀 Starting Django..."

python manage.py collectstatic --noinput
python manage.py migrate --noinput

gunicorn core.wsgi:application --bind 0.0.0.0:$PORT