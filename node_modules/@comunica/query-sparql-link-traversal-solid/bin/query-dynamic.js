#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_entries_1 = require("@comunica/context-entries");
const core_1 = require("@comunica/core");
const query_sparql_solid_1 = require("@comunica/query-sparql-solid");
const runner_cli_1 = require("@comunica/runner-cli");
const CliArgsHandlerAnnotateSources_1 = require("../lib/CliArgsHandlerAnnotateSources");
const cliArgsHandlerSolidAuth = new query_sparql_solid_1.CliArgsHandlerSolidAuth();
(0, runner_cli_1.runArgsInProcess)(`${__dirname}/../`, `${__dirname}/../config/config-default.json`, {
    context: new core_1.ActionContext({
        [context_entries_1.KeysInitQuery.cliArgsHandlers.name]: [
            cliArgsHandlerSolidAuth,
            new CliArgsHandlerAnnotateSources_1.CliArgsHandlerAnnotateSources(),
        ],
    }),
    onDone() {
        if (cliArgsHandlerSolidAuth.session) {
            cliArgsHandlerSolidAuth.session.logout()
                // eslint-disable-next-line no-console
                .catch(error => console.log(error));
        }
    },
});
//# sourceMappingURL=query-dynamic.js.map