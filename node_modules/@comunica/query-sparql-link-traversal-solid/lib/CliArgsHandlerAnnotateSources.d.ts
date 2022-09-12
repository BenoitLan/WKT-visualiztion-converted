import type { ICliArgsHandler } from '@comunica/types';
import type { Argv } from 'yargs';
export declare class CliArgsHandlerAnnotateSources implements ICliArgsHandler {
    populateYargs(argumentsBuilder: Argv<any>): Argv<any>;
    handleArgs(args: Record<string, any>, context: Record<string, any>): Promise<void>;
}
