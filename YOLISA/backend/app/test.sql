CREATE PROCEDURE `add_post_salesman` (_product_name VARCHAR(80),
									  _price double,
                                      _tags JSON,
                                      _localization text,
                                      _desc_product text,
                                      _img_name text,
                                      _type_img varchar(60),
                                      _img blob,
                                      _salesman_id int)
                                      
BEGIN
INSERT INTO publish_product(product_name,price,tags,localization,desc_product,
img_name,type_img,img,salesman_id)
VALUES (_product_name,_price,_tags,_localization,_desc_product,_img_name,_type_img,
_img,_salesman_id);


END