"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliArgsHandlerAnnotateSources = void 0;
const context_entries_link_traversal_1 = require("@comunica/context-entries-link-traversal");
class CliArgsHandlerAnnotateSources {
    populateYargs(argumentsBuilder) {
        return argumentsBuilder
            .options({
            annotateSources: {
                type: 'string',
                describe: 'Annotate data with their sources',
                choices: [
                    'graph',
                ],
            },
        });
    }
    async handleArgs(args, context) {
        if (args.annotateSources) {
            context[context_entries_link_traversal_1.KeysRdfResolveHypermediaLinks.annotateSources.name] = args.annotateSources;
        }
    }
}
exports.CliArgsHandlerAnnotateSources = CliArgsHandlerAnnotateSources;
//# sourceMappingURL=CliArgsHandlerAnnotateSources.js.map