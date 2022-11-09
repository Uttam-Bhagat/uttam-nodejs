CREATE TABLE Patient (
    id BIGINT NOT NULL,
    first_nme VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    CONSTRAINT patient_id PRIMARY_KRY (id)
)