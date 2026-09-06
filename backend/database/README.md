# EDUPATH Database Architecture — Phase 02

The Phase 02 schema establishes the identity and education foundation for the EDUPATH platform.

## Core domains

- Users and profiles
- Roles and permissions
- Institutions and schools
- Education levels, programmes and class levels
- Academic sessions
- Students, teachers and parents
- Parent/student relationships

## Data integrity

Foreign keys are enforced through Laravel migrations. Unique constraints protect public IDs, user identity fields and role assignments. High-value lookup paths have indexes.

## Deletion policy

User-facing identity and education entities use soft deletes where historical records should remain recoverable. Relationship/pivot records cascade when their parent record is permanently removed.

## Public identifiers

User-facing institution, school and user records expose UUID-based `public_id` values in addition to internal numeric primary keys. Internal numeric keys remain useful for efficient relational joins.

## Migration rule

Run migrations only after the Laravel application and environment are installed and the target MySQL database has been configured. Never use destructive reset commands against production data.
