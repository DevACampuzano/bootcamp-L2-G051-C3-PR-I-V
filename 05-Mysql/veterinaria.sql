create database Veterinaria;
use Veterinaria;

create table Usuarios (
	id int not null auto_increment,
    nombre varchar(500) not null,
    apellido varchar(500) not null,
    documento varchar(500) not null,
    rol enum('owner', 'vet') not null,
    password varchar(500) not null,
    estado bool default true not null,
    primary key (id)
);

create table Mascota (
	id int not null auto_increment,
	nombre varchar(500) not null,
    especie varchar(500) not null ,
	raza varchar(500),
    id_usuario int not null,
	estado bool default true not null,
    primary key (id),
    CONSTRAINT FK_USUARIO_MASCOTA foreign key (id_usuario) REFERENCES Usuarios(id)
);

/*
1. cita agendad
2. cita en curso
3. cita finalizada
*/
create table Citas (
	id int not null auto_increment,
    fecha datetime not null,
    id_veterinario int not null,
    id_mascota int not null,
    historia_clinica text,
    fecha_fin  datetime,
    estado int default 1 not null,
    primary key (id),
    constraint fk_masconta_cita foreign key (id_mascota) 
		REFERENCES Mascota(id),
    constraint fk_veterinario_cita foreign key (id_veterinario) 
		REFERENCES Usuarios(id)
);

