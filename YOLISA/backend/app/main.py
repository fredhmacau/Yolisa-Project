from src.infra.http import api
from uvicorn import run as server

if __name__=="__main__":
    server(api)