CREATE TABLE IF NOT EXISTS covid_data
(
    date date NOT NULL,
    overall_cases int NOT NULL,
    previous_day_cases int NOT NULL,
    recovered_people int NOT NULL,
    previous_day_recovered_people int NOT NULL,
    diseased_people int NOT NULL,
    previous_day_diseased_people int NOT NULL,
    tests_performed_more_than int NOT NULL,
    previous_day_tests_performed_more_than int NOT NULL,
    updated_at date NOT NULL
);
