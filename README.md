# Eve Swagger Interface

## An OpenAPI for EVE Online

JavaScript client for [ESI](https://developers.eveonline.com/blog/article/introducing-the-esi-api) compatible with NodeJS.
The client returns a developer friendly set of functions that return promises resolving to the response from ESI endpoint.
The underlying client library is generated by [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).
Its documentation can be found [here](generated/docs/README.md), which is primarily useful for details on the response data models.
Versioning will follow the version reported by ESI as best as possible.

- API version: 0.3.2
- Package version: 0.3.2

## Installation

### For [Node.js](https://nodejs.org/)

Currently, this library has not been published to the `npm` repository.
However, it can still be depended on in NodeJS projects by including a dependency in `package.json` using a GitHub URL:

```json
"dependencies": {
   "eve_swagger_interface": "git://github.com/lhkbob/eve-swagger-js.git#v0.3.2",
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ESI = require('eve_swagger_interface');

ESI.Alliance.getAll().then(function(alliances) {
    console.log(alliances);
}).catch(function(error) {
    console.error(error);
});
```

## Documentation for API Endpoints

Documentation for the library can be found [here](docs/index.html).

## Documentation for Authorization


### evesso

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://login.eveonline.com/oauth/authorize
- **Scopes**: 
  - esi-assets.read_assets.v1: EVE SSO scope esi-assets.read_assets.v1
  - esi-bookmarks.read_character_bookmarks.v1: EVE SSO scope esi-bookmarks.read_character_bookmarks.v1
  - esi-calendar.read_calendar_events.v1: EVE SSO scope esi-calendar.read_calendar_events.v1
  - esi-calendar.respond_calendar_events.v1: EVE SSO scope esi-calendar.respond_calendar_events.v1
  - esi-characters.read_contacts.v1: EVE SSO scope esi-characters.read_contacts.v1
  - esi-clones.read_clones.v1: EVE SSO scope esi-clones.read_clones.v1
  - esi-corporations.read_corporation_membership.v1: EVE SSO scope esi-corporations.read_corporation_membership.v1
  - esi-fleets.read_fleet.v1: EVE SSO scope esi-fleets.read_fleet.v1
  - esi-fleets.write_fleet.v1: EVE SSO scope esi-fleets.write_fleet.v1
  - esi-killmails.read_killmails.v1: EVE SSO scope esi-killmails.read_killmails.v1
  - esi-location.read_location.v1: EVE SSO scope esi-location.read_location.v1
  - esi-location.read_ship_type.v1: EVE SSO scope esi-location.read_ship_type.v1
  - esi-mail.organize_mail.v1: EVE SSO scope esi-mail.organize_mail.v1
  - esi-mail.read_mail.v1: EVE SSO scope esi-mail.read_mail.v1
  - esi-mail.send_mail.v1: EVE SSO scope esi-mail.send_mail.v1
  - esi-planets.manage_planets.v1: EVE SSO scope esi-planets.manage_planets.v1
  - esi-search.search_structures.v1: EVE SSO scope esi-search.search_structures.v1
  - esi-skills.read_skillqueue.v1: EVE SSO scope esi-skills.read_skillqueue.v1
  - esi-skills.read_skills.v1: EVE SSO scope esi-skills.read_skills.v1
  - esi-universe.read_structures.v1: EVE SSO scope esi-universe.read_structures.v1
  - esi-wallet.read_character_wallet.v1: EVE SSO scope esi-wallet.read_character_wallet.v1

