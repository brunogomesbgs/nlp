# NLP + FastApi
NLP with Transformer and FastApi, using Python 3.12 in a docker.

# How works
#Build and execute the application

docker build -t fastapi-transformer .
docker run -p 8000:8000 fastapi-transformer

#alternativelly, you can run a dev environment, this already with an active venv and inside the folder nlp
uvicorn app.main:app --reload