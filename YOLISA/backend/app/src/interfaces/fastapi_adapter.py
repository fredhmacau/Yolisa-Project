# pylint: disable=trailing-whitespace
from src.core.entities.visitant import EntityVisitant
from src.core.entities import EntitySalesman
import asyncio

#Adapter for fastapi framework
#instance EntitySalesman
salesman=EntitySalesman()

#instance EntityVisitant
visitant=EntityVisitant()

#class Adapter
class FasAPIAdapter:
    def __init__(self):
        pass
    # route http://127.0.0.1:8000/api/v1/salesman/acount/add
    async def salesman_register(self,**data):
        return await salesman.register(**data)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/get
    # route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}
    async def salesman_get(self,id_salesman:int):
        return await salesman.get(id_salesman)
    
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
    # route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}/picture
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
    #route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}/contacts
    async def get_contact_salesman(self,id_salesman:int):
        return await salesman.get_contact(id_salesman)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/contact/update_contact
    async def update_contact_salesman(self,id_salesman:int,**data):
        return await salesman.update_contact(id_salesman,**data)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/add
    async def add_post_salesman(self,id_salesman:int,**data):
        return await salesman.add_post(id_salesman,**data)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/view_img/{id_post}
    # route http://127.0.0.1:8000/api/v1/visitant/info/post/{id}/img
    async def view_img_post_salesman(self,id_post:int):
        return await salesman.view_img_post(id_post)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/view_posts
    #route http://127.0.0.1:8000/api/v1/visitant/info/salesman/posts
    async def view_posts_salesman(self,id_salesman:int):
        return await salesman.view_posts(id_salesman)
    
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/update_post/{id_post}
    async def update_post_salesman(self,id_post:int,**data):
        return await salesman.update_post(id_post,**data)
    
    # route http://127.0.0.1:8000/api/v1/salesman'/acount/post/delete/{id_post}
    async def delete_post_salesman(self,id_post:int):
        return await salesman.delete_post(id_post)
    
    # route http://127.0.0.1:8000/api/v1/visitant/?query={product}
    async def search_product(self,product_name:str):
        return await visitant.search_product_by_visitant(product_name)
    
    # route http://127.0.0.1:8000/api/v1/visitant/?query={product}&&filter_by_province
    async def search_product_by_province(self,product_name:str,province_name:str):
        return await visitant.search_product_with_filter_province(product_name,province_name)
    
    # route http://127.0.0.1:8000/api/v1/visitant/info/post/{id}
    async def  get_info_post(self,id_post:int):
        return await visitant.get_infomations_of_post(id_post)
    
    
    # route http://127.0.0.1:8000/api/v1/salesman/receive_email
    async def receive_email(self,data):
        return await salesman.receive_email(data)
    
    # route http://127.0.0.1:8000/api/v1/salesman/alter-pass
    async def alter_pass(self,data):
        return await salesman.alter_password(data)
    
    
    # route http://127.0.0.1:8000/api/v1/salesman/acount/add-marker-position
    async def post_position(self,id_salesman,data):
        return await salesman.post_position(id_salesman,data)
    
    
    # route http://127.0.0.1:8000/api/v1/salesman/acount/get-marker-position
    async def get_marker_positon(self,id_salesman):
        return await salesman.get_marker_position(id_salesman)
    
    #route http://127.0.0.1:8000/api/v1/salesman/acount/update-marker-position
    async def update_marker_position(self,id_salesman,data):
        return await salesman.update_marker_position(id_salesman,data)
    
    # route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id}/markers
    async def get_markers(self,id_salesman):
        return await visitant.get_markers_salesman(id_salesman)
    
    # route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}/{id_post}
    async def get_info_salesman(self,id_salesman,id_post):
        return await visitant.get_salesman_and_post(id_salesman,id_post)
    
    # route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id}/register_views
    async def register_views(self,id_salesman:int):
         return await  visitant.register_views_in_post(id_salesman)
    
    # route http://127.0.0.1:8000/api/v1/visitant/info/salesmans/total
    async def get_all_salesmans(self):
        return await visitant.get_all_salesmans()
    
    # route http://127.0.0.1:8000/api/v1/visitant/info/posts/total
    async def get_all_posts(self):
        return await visitant.get_all_posts()