CREATE TABLE IF NOT EXISTS covid_data
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    date date NOT NULL,
    overall_cases int NOT NULL,
    recovered int NOT NULL,
    dead int NOT NULL,
    tests_performed int NOT NULL,
    updated_at date NOT NULL,
    CONSTRAINT pk_covid_data PRIMARY KEY (id)
);
