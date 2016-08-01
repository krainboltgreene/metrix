CREATE OR REPLACE VIEW latests AS
  SELECT
    DISTINCT ON (type) type, data, created_at
  FROM
    statistics
  ORDER BY type, created_at DESC
