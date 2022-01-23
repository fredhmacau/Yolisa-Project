from src.core.entities import EntitySalesman
import asyncio

#Adapter for fastapi framework
#instance EntitySalesman
salesman=EntitySalesman()
#class Adapter
class FasAPIAdapter:
    def __init__(self):
        pass
    # route http://127.0.0.1:8000/api/v1/salesman/add
    async def salesman_register(self,**data):
        return await salesman.register(**data)
    