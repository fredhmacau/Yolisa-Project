from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.infra.http.routes import salesman

#api yolisa
api=FastAPI(title="YOLISA Backend",
            description="api YOLISA")

#add middleware for cors orgins, using all
api.add_middleware(CORSMiddleware,
                   allow_methods=['*'],
                   allow_origins=['*'],
                   allow_headers=['*'],
                   allow_credentials=['*'])

#add routes
api.include_router(salesman,prefix="/api/v1")
