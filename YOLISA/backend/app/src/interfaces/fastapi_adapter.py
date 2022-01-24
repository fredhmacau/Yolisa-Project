# pylint: disable=trailing-whitespace
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
    
    #route http://127.0.0.1:8000/api/v1/salesman/get/{id}
    async def salesman_get(self,id:int):
        return await salesman.get(id)
    
    #route http://127.0.0.1:8000/api/v1/salesman/update/{id}
    async def salesman_update(self,id:int,**data):
        return await salesman.update(id,**data)
    
    #route http://127.0.0.1:8000/api/v1/salesman/delete/{id}
    async def salesman_delete(self,id:int):
        return await salesman.delete(id)
    
    # route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/add_img
    async def salesman_add_img(self,id_salesman:int,img):
        return await salesman.add_img(id_salesman,img)
    
    # route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/get_img
    async def get_img_salesman(self,id_salesman:int):
        return await salesman.get_img(id_salesman)
    
    # route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/update_img
    async def update_img_salesman(self,id_salesman:int,img):
        return await salesman.update_img(id_salesman,img)
    
    #route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/delete_img
    async def delete_img_salesman(self,id_salesman:int):
        return await salesman.delele_img(id_salesman)
    
    # route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/add_contact
    async def add_contact_salesman(self,id_salesman:int,**data):
        return await salesman.add_contact(id_salesman,**data)