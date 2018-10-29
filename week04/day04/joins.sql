select * from products JOIN shops ON shops.id = products.shop_id;
select * from products JOIN shops ON shops.id = products.shop_id
WHERE shops.name = "jarir";
select *
from products JOIN shops ON shops.id = products.shop_id
WHERE shops.name = "jarir"
ORDER BY products.price desc;