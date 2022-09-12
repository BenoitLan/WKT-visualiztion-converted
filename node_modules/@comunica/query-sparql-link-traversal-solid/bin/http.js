#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actor_init_query_1 = require("@comunica/actor-init-query");
const query_sparql_solid_1 = require("@comunica/query-sparql-solid");
const CliArgsHandlerAnnotateSources_1 = require("../lib/CliArgsHandlerAnnotateSources");
const defaultConfigPath = `${__dirname}/../config/config-default.json`;
actor_init_query_1.HttpServiceSparqlEndpoint.runArgsInProcess(process.argv.slice(2), process.stdout, process.stderr, `${__dirname}/../`, process.env, defaultConfigPath, code => {
    process.exit(code);
}, [
    new query_sparql_solid_1.CliArgsHandlerSolidAuth(),
    new CliArgsHandlerAnnotateSources_1.CliArgsHandlerAnnotateSources(),
]).catch(error => process.stderr.write(`${error.message}/n`));
//# sourceMappingURL=http.js.map