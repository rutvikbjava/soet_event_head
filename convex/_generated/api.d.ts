/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as events from "../events.js";
import type * as files from "../files.js";
import type * as http from "../http.js";
import type * as newsUpdates from "../newsUpdates.js";
import type * as participantRegistrations from "../participantRegistrations.js";
import type * as participatingInstitutions from "../participatingInstitutions.js";
import type * as preQualifierTests from "../preQualifierTests.js";
import type * as profiles from "../profiles.js";
import type * as router from "../router.js";
import type * as superAdmin from "../superAdmin.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  events: typeof events;
  files: typeof files;
  http: typeof http;
  newsUpdates: typeof newsUpdates;
  participantRegistrations: typeof participantRegistrations;
  participatingInstitutions: typeof participatingInstitutions;
  preQualifierTests: typeof preQualifierTests;
  profiles: typeof profiles;
  router: typeof router;
  superAdmin: typeof superAdmin;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
