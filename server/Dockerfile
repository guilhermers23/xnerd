FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
COPY commands.sh .

RUN pip install --no-cache-dir -r requirements.txt
RUN chmod +x commands.sh

COPY . .

CMD ["./commands.sh"]