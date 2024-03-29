#entity salesman 
import asyncio

from src.core.usecases import *
from bcrypt import hashpw,gensalt
from src.infra.helpers import response,exception,response_files
import io


class EntitySalesman:
    """salesman entity"""
    def __init__(self):
        pass
    #generate_password
    async def __password_hash(self,password):
        password_hash=hashpw(password.encode('utf-8'),gensalt())
        return password_hash
    
    #-------------------------------------------------------------------------
    #register salesman
    async def register(self,**data):
        #call __password_hash
        values={
        "username":data['username'],
        "email":data['email'],
        "business_name":data['business_name'],
        "password_hash":await self.__password_hash(data['password']),
        "nif":data['nif'],
        "desc_business":data['desc_business']
        }
        #usecase registred
        try:
            result=await registred_salesman(**values)
            if result:
                return response(msg={"msg":"create salesman with success"},
                                status=201)
          
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
    
    #-------------------------------------------------------------------------    
    #select salesman
    async def get(self,id:int):
        try:
            #store data from salesman
            result=await select_salesman_data(id)
            if result:
                return response(msg=result,status=200) 
            else:
                return response(msg={'msg':'salesman not found'},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    #-------------------------------------------------------------------------
    #update salesman
    async def update(self,id:int,**data):
        try:
            result=await update_salesman(id,**data)
            if result:
                return response(msg={"msg":"update salesman with success"},
                                status=200)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
        
    #-------------------------------------------------------------------------
    #delete salesman
    async def delete(self,id:int):
        try:
            result=await delete_salesman(id)
            if result:
                return response(msg={"msg":'delete salesman with success'},
                                status=200)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    #-------------------------------------------------------------------------        
    #add img
    async def add_img(self,id_salesman:int,img):
        try:
            result=await salesman_add_img(id_salesman,img)
            if result:
                return response(msg={"msg":"img for salesman add with success"},
                                status=201)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    #-------------------------------------------------------------------------
    #get img salesman
    async def get_img(self,id_salesman:int):
        try:
            img=await get_img_from_salesman(id_salesman)
            if img:
                img_byte=io.BytesIO(img['img'])
                return response_files(img_byte.read(),img['type_image'])
            else:
                return response(msg={"msg":"img not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    #-------------------------------------------------------------------------    
    #update img
    async def update_img(self,id_salesman:int,img):
        try:
            result=await update_img_salesman(id_salesman,img)
            if result:
                return response(msg={"msg":"img the salesman update with sucess"},
                                status=200)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)

    #-------------------------------------------------------------------------
    #delete img from salesman
    async def delele_img(self,id_salesman:int):
        try:
            result=await delete_img_salesman(id_salesman)
            if result:
                return response(msg={"msg":"img the salesman delete with success"},
                                status=200)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    #-------------------------------------------------------------------------
    #add contact from salesman
    async def add_contact(self,id_salesman:int,**data):
        try:
            result=await add_contact_from_salesman(id_salesman,**data)
            if result:
                return response(msg={"msg":"contact from salesman add with success"},
                                status=201)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
        
    #-------------------------------------------------------------------------
    #get contact from salesman
    async def get_contact(self,id_salesman:int):
        try:
            result=await get_contact_from_salesman(id_salesman)
            if result:
                return response(msg=result,status=200)
            else:
                return response(msg={'msg':"salesman or contact not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    
     #-------------------------------------------------------------------------
    #update contact from salesman
    async def update_contact(self,id_salesman:int,**data):
        try:
            result=await update_contact_from_salesman(id_salesman,**data)
            if result:
                return response(msg={"msg":"salesman contact update with success"},
                                status=200)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
        
    #-------------------------------------------------------------------------
    #add post from salesman
    async def add_post(self,id_salesman:int,**data):
        try:
            result=await post_product_from_salesman(id_salesman,**data)
            if result:
                return response(msg={"msg":"product posted with success"},
                                status=201)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
    
    #-------------------------------------------------------------------------
    #view img the post from salesman
    async def view_img_post(self,id_img:int):
        try:
            result=await get_img_in_post_salesman(id_img)
            if result:
                img_byte=io.BytesIO(result['img'])
                return response_files(img_byte.read(),result['type_img'])
            else:
                return response(msg={"msg":"img not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
   
     #-------------------------------------------------------------------------
    #view posts the salesman
    async def view_posts(self,id_salesman:int):
        try:
            result=await get_posts_from_salesman(id_salesman)
            if result:
                
                return result
            else:
                return response(msg={"msg":"posts not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)

    #-------------------------------------------------------------------------
    #update post the salesman
    async def update_post(self,id_post:int,**data):
        try:
            result=await update_post_from_salesman(id_post,**data)
            if result:
                return response(msg={"msg":"update post with success"},status=200)
            else:
                return response(msg={"msg":"post not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    #-------------------------------------------------------------------------
    #delete post from salesman
    async def delete_post(self,id_post:int):
        try:
            result=await delete_post_from_salesman(id_post)
            if result:
                return response(msg={"msg":"post delete with success"},status=200)
            else:
                return response(msg={"msg":"post not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
        
    #-------------------------------------------------------------------------
    #receive email from salesman
    async def receive_email(self,data):
        try:
            result=await receive_email_for_alter_pass(data)
            if result !=0:
                return response(msg={"msg":"email received with success"},status=200)
            else:
                return response(msg={'msg':"email not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=404)
    
    
    #-------------------------------------------------------------------------
    #alter password salesman
    async def alter_password(self,data):
        values={
            "code":data['code'],
            "email_receive":data['email_salesman'],
            "new_password_hash":await self.__password_hash(data['new_password'])
        }
        try:
            result=await alter_password_salesman(values)
            if result != 0:
                return response(msg={"msg":"password update with success"},status=200)
            else:
                return response(msg={"msg":"salesman not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)
        
    #-------------------------------------------------------------------------
    #add marker position in map
    async def post_position(self,id_salesman,data):
        try:
            result=await add_position_for_salesman(id_salesman,data)
            if result:
                return response(msg={"msg":"add markers coordinates with success"},status=201)
            else:
                return response(msg={"msg":"markers lat and lng not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"{exc}",status=404)
    
    #-------------------------------------------------------------------------
    #get marker position in map
    async def get_marker_position(self,id_salesman:int):
        try:
            result=await get_marker_for_salesman(id_salesman)
            if result:
                return response(msg={result},status=200)
            else:
                return response(msg={"msg":"salesman not found"},status=404)
        except Exception as exc:
            raise exception(detail=f"{exc}",status=404)
    
    #-------------------------------------------------------------------------
    #update marker position in map
    async def update_marker_position(self,id_salesman,data):
        try:
            result=await update_marker_position_salesman(id_salesman,data)
            if result == 0:
                return response(msg={"msg":"markers not found"}, status=404)
            else:
                return response(msg={"msg":"update marker with success"},status=200)
        except Exception as exc:
            raise exception(detail=f"{exc}",status=404)

    