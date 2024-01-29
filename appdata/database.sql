CREATE TYPE language AS ENUM(
    'es',
    'en',
    'jp'
    );

CREATE TYPE database_table AS ENUM(
    'POKEMON', 'ABILITY', 'MOVE', 'ITEM', 'TYPE'
    );

CREATE TABLE localized_name(
    owner BIGINT NOT NULL,
    value TEXT NOT NULL,
    language language NOT NULL,
    table_origin database_table NOT NULL
);

CREATE TABLE pokemon(
    id SERIAL,
    abilities INT[] NOT NULL,
    base_exp INT NOT NULL,
    height INT NOT NULL,
    held_items INT[],
    moves INT[],
    stats INT[],
    weight INT
);

CREATE TABLE ability(
    id SERIAL
);

CREATE TABLE item(
    id SERIAL,
    cost INT NOT NULL
);

CREATE TYPE damage_class AS ENUM(
    'STATUS',
    'PHYSICAL',
    'SPECIAL'
    );

CREATE TABLE move(
    id SERIAL,
    accuracy INT,
    damage_class damage_class NOT NULL,
    effect_chance INT,
    power INT,
    pp INT NOT NULL,
    priority INT NOT NULL,
    type INT NOT NULL
);

CREATE TYPE DAMAGEFACTOR AS ENUM(
    'NONE',
    'HALF',
    'DOUBLE'
    );


