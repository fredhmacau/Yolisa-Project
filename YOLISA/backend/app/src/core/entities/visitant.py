import asyncio
from src.infra.helpers import response,exception,response_files
from src.core.usecases import *
#class model Visitant Entity
class EntityVisitant:
    """visitant entity"""
    
    def __init__(self):
        pass

    #-------------------------------------------------------------------------
    #search product
    async def search_product_by_visitant(self,product_name:str):
        try:
            result=await search_product_name(product_name)
            if result:
                return result
            else:
                return response(msg={"msg":"product not found"},
                                status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
    
     #-------------------------------------------------------------------------
    #search product with filter province
    async def search_product_with_filter_province(self,product_name:str,province:str):
        try:
            result=await search_product_filter_by_province(product_name,province)
            if result:
                return result
            else:
                return response(msg={"msg":"product not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
        
    #-------------------------------------------------------------------------
    #get info of post
    async def get_infomations_of_post(self,id_post:int):
        try:
            result=await get_info_of_the_post_by_visitant(id_post)
            if result:
                return result
            else:
                return response(msg={"msg":"product not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)