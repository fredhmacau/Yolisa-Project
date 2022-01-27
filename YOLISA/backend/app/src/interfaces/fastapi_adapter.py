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
    # route http://127.0.0.1:8000/api/v1/salesman/acount/add
    async def salesman_register(self,**data):
        return await salesman.register(**data)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/get
    async def salesman_get(self,id:int):
        return await salesman.get(id)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/update
    async def salesman_update(self,id:int,**data):
        return await salesman.update(id,**data)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/delete
    async def salesman_delete(self,id:int):
        return await salesman.delete(id)
    
    # route http://127.0.0.1:8000/api/v1/salesman/acount/img/add_img
    async def salesman_add_img(self,id_salesman:int,img):
        return await salesman.add_img(id_salesman,img)
    
    # route http://127.0.0.1:8000/api/v1/salesman/acount/img/get_img
    async def get_img_salesman(self,id_salesman:int):
        return await salesman.get_img(id_salesman)
    
    # route http://127.0.0.1:8000/api/v1/salesman/acount/img/update_img
    async def update_img_salesman(self,id_salesman:int,img):
        return await salesman.update_img(id_salesman,img)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/img/delete_img
    async def delete_img_salesman(self,id_salesman:int):
        return await salesman.delele_img(id_salesman)
    
    # route http://127.0.0.1:8000/api/v1/salesman/acount/contact/add_contact
    async def add_contact_salesman(self,id_salesman:int,**data):
        return await salesman.add_contact(id_salesman,**data)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/contact/get_contact
    async def get_contact_salesman(self,id_salesman:int):
        return await salesman.get_contact(id_salesman)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/contact/update_contact
    async def update_contact_salesman(self,id_salesman:int,**data):
        return await salesman.update_contact(id_salesman,**data)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/add
    async def add_post_salesman(self,id_salesman:int,**data):
        return await salesman.add_post(id_salesman,**data)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/view_img/{id_post}
    async def view_img_post_salesman(self,id_post:int):
        return await salesman.view_img_post(id_post)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/view_posts
    async def view_posts_salesman(self,id_salesman:int):
        return await salesman.view_posts(id_salesman)
    
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/update_post/{id_post}
    async def update_post_salesman(self,id_post:int,**data):
        return await salesman.update_post(id_post,**data)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/delete/{id_post}
    async def delete_post_salesman(self,id_post:int):
        return await salesman.delete_post(id_post)