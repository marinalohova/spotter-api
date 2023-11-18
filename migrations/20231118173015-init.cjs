'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
DROP TABLE IF EXISTS "beats" CASCADE;
DROP TYPE IF EXISTS "public"."enum_beats_camera_angle";
DROP TABLE IF EXISTS "acts" CASCADE;
DROP TABLE IF EXISTS "beatsheets" CASCADE;
DROP TABLE IF EXISTS "beatsheets" CASCADE;
CREATE TABLE IF NOT EXISTS "beatsheets" ("id"   BIGSERIAL , "title" VARCHAR(255) NOT NULL, PRIMARY KEY ("id"));
SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'beatsheets' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
DROP TABLE IF EXISTS "acts" CASCADE;
CREATE TABLE IF NOT EXISTS "acts" ("id"   BIGSERIAL , "beatsheet_id" BIGINT NOT NULL REFERENCES "beatsheets" ("id") ON DELETE CASCADE ON UPDATE CASCADE, "description" TEXT NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, PRIMARY KEY ("id"));
SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'acts' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
DROP TABLE IF EXISTS "beats" CASCADE;
DROP TYPE IF EXISTS "public"."enum_beats_cameraAngle";
create type public.enum_beats_camera_angle as enum ('Pan', 'Tilt', 'Zoom', 'POV', 'CU', 'LS', 'MS');
CREATE TABLE IF NOT EXISTS "beats" ("id"   BIGSERIAL , "act_id" BIGINT NOT NULL REFERENCES "acts" ("id") ON DELETE CASCADE ON UPDATE CASCADE, "title" VARCHAR(255) NOT NULL, "description" TEXT NOT NULL, "duration" VARCHAR(255) NOT NULL, "camera_angle" "public"."enum_beats_camera_angle", "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, PRIMARY KEY ("id"));
`)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
