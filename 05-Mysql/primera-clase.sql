# Crear base de datos
create database mercado;

# Eliminar base de datos
drop database test;
#crear una tabla
create table proveedor (
Id_proveedor integer not null auto_increment,
nombre varchar(500) not null,
direcciones varchar(500),
primary key (Id_proveedor)
);

#consultar
select * from proveedor;
#insertar
insert into proveedor (nombre,direcciones) values ('D1', 'A');

insert into proveedor (nombre) values ('Ara');

#insertar en una tabla con llave foranea 

insert into Productos (Nombre, ID_Proveedor) values ('pollo', 2);

select * from Productos;

insert into Productos (Nombre, ID_Proveedor) values ('arroz',2);

#Actualizaciones 
#siempre usar una codicion para actualizar registros
update proveedor set direcciones = 'B' where id_proveedor = 2 ;

#Eliminaciones
delete from proveedor where id_proveedor =1;



##Consultas con condiciones
select * from Productos where Nombre != 'arroz';

##Expecificar columnas de la consulta

select ID_Producto, Nombre from Productos where ID_Proveedor =2;