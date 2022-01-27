CREATE DEFINER=`root`@`localhost` PROCEDURE `update_post_salesman`(_product_name VARCHAR(80),
										 _localization text,
                                         _desc_product text,
                                         _post_id int)
BEGIN
UPDATE publish_product SET product_name=_product_name,
localization=_localization,desc_product=_desc_product
WHERE id=_post_id;
END