FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "mkdir -p /app/data && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py shell -c \"from django.contrib.auth import get_user_model; U=get_user_model(); U.objects.filter(is_superuser=True).exists() or U.objects.create_superuser(email='$DJANGO_SUPERUSER_EMAIL', password='$DJANGO_SUPERUSER_PASSWORD')\" && gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 2"]
