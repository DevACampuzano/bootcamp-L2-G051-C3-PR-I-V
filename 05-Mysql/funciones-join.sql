select * from Productos;
# contar cuantos productos tengos
select count(*) as productos from Productos;
#producto con el precio mas alto

select * from Productos where Precio = (select max(Precio) from Productos);
 
#producto con el precio mas bajo
select * from Productos where Precio = (select min(Precio) from Productos);

#suma de los precios de todos los procutos
select Sum(precio) from Productos;

#promedio de los precios de todos los procutos
select AVG(precio) from Productos;

#ordernar los registro DESC
#Por defecto va a ordenar de forma ASC
select * from Productos order by Precio;
select * from Productos order by Precio DESC;

#inner join
select p.nombre, p.direcciones, pd.ID_Producto, pd.Nombre, pd.Precio 
	from Productos  as pd 
	inner join proveedor as  p
		on pd.ID_Proveedor  = p.Id_proveedor where p.Id_proveedor=2 ;