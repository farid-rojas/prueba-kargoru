"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migraciones1656647119131 = void 0;
class migraciones1656647119131 {
    constructor() {
        this.name = 'migraciones1656647119131';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "quotes" ("id" SERIAL NOT NULL, "document" integer NOT NULL, "name" character varying NOT NULL, "weigth" character varying NOT NULL, "addressSource" character varying NOT NULL, "addressDestination" character varying NOT NULL, CONSTRAINT "PK_99a0e8bcbcd8719d3a41f23c263" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "quotes"`);
    }
}
exports.migraciones1656647119131 = migraciones1656647119131;
//# sourceMappingURL=1656647119131-migraciones.js.map