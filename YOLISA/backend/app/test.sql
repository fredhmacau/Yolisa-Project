CREATE PROCEDURE `register_salesman`(_username varchar(80),
								_email varchar(80), 
								_business_name varchar(80),                   
								_password_hash varchar(120),
								_nif varchar(20),
                                _doc_name Text,
                                _doc_type Varchar(60),
								_doc_identification blob,
								_desc_business text)
BEGIN
INSERT INTO salesman(username,email,business_name,password_hash,nif,
doc_name,doc_type,doc_identification,desc_business) values (_username,_email,_business_name,
_password_hash,_nif,_doc_name,_doc_type,_doc_identification,_desc_business);
END