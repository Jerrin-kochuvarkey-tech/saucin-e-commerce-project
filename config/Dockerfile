# Use official Python base image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy requirements.txt from root first
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the config folder (which contains manage.py, Django apps, etc.)
COPY config/ /app/

# Copy the .env file to the container (make sure it's in the same directory as your Dockerfile)
COPY .env .env

# Expose Django's default port
EXPOSE 8000

# Run the Django server (adjust path for manage.py)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
