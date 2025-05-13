# Use official Python base image
FROM python:3.10-slim

# Set working directory inside the container
WORKDIR /app

# Copy the backend code from the config directory
COPY config/ /app/

# Install dependencies from the requirements.txt inside config/
RUN pip install --no-cache-dir -r requirements.txt

# Expose Django's default port
EXPOSE 8000

# Run the Django server from the manage.py in /app/
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
