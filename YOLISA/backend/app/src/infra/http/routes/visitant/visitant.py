from fastapi import APIRouter
from typing import Optional
from src.interfaces.fastapi_adapter import FasAPIAdapter

#instance route
visitant=APIRouter(prefix="/visitant",tags=['visitant'])
#adapter
adapter=FasAPIAdapter()

# route http://127.0.0.1:8000/api/v1/visitant/?query={product_name}
@visitant.get('/',tags=['visitant'])
async def search_of_product(query:Optional[str],
                            filter_by_province:Optional[str]=None
                            ):
    
   if query:
       return await adapter.search_product(query)
   
   if query and filter_by_province:
       return await adapter.search_product_by_province(query,filter_by_province)
   

# route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}
@visitant.get("/info/salesman/{id_salesman}",tags=['visitant'])
async def get_info_the_salesman(id_salesman:int):
    return await adapter.salesman_get(id_salesman)

# route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}/picture
@visitant.get('/info/salesman/{id_salesman}/picture',tags=['visitant'])
async def get_img_the_salesman(id_salesman:int):
    return await adapter.get_img_salesman(id_salesman)

# route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id_salesman}/contacts
@visitant.get('/info/salesman/{id_salesman}/contacts',tags=['visitant'])
async def get_contacts_the_salesman(id_salesman:int):
    return await adapter.get_contact_salesman(id_salesman)

# route http://127.0.0.1:8000/api/v1/visitant/info/post/{id}
@visitant.get('/info/post/{id_post}',tags=['visitant'])
async def get_info_the_post(id_post:int):
    return await adapter.get_info_post(id_post)

# route http://127.0.0.1:8000/api/v1/visitant/info/post/{id}/img
@visitant.get('/info/post/{id_post}/img',tags=['visitant'])
async def get_img_the_post(id_post:int):
    return await adapter.view_img_post_salesman(id_post)

#route http://127.0.0.1:8000/api/v1/visitant/info/salesman/{id}/posts
@visitant.get('/info/salesman/{id_salesman}/posts')
async def get_posts_the_salesman(id_salesman:int):
    return await adapter.view_posts_salesman(id_salesman)

