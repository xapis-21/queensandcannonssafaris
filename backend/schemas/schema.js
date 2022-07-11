// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import services from "./services";
import about from "./about";
import testimonials from "./testimonials";
import portfolio from "./portfolio";
import opportunity from "./opportunity";
import properties from "./properties";
import events from "./events";
import rent from "./rent";
import taxi from "./taxi";
import tours from "./tours";
import visas from "./visas";
import work from "./work";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // services,
    // category,
    about,
    testimonials,
    portfolio,
    opportunity,
    properties,
    events,
    taxi,
    tours,
    rent,
    visas,
    work,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
