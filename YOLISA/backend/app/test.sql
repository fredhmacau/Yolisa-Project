CREATE DEFINER=`root`@`localhost` PROCEDURE `add_more_contact`(_phone_number int,
									 _province_focus VARCHAR(80),
                                     _city_focus VARCHAR(80),
                                     _desc_localization text,
                                     _salesman_id int)
BEGIN
INSERT INTO contact_salesman(phone_number,province_focus,city_focus,desc_localization,
salesman_id) VALUES (_phone_number,_province_focus,_city_focus,_desc_localization,_salesman_id);
END