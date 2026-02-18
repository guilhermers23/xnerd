FROM python:3.14-slim

# Impede que o Python gere arquivos .pyc e permite logs em tempo real
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Instala dependências do sistema para o Postgres e Pillow
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Instala as dependências diretamente no sistema do container
COPY requirements.txt .
COPY commands.sh .
RUN pip install --no-cache-dir -r requirements.txt


# Copia o projeto
COPY . .

CMD ["./commands.sh"]