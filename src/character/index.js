/**
 * A container for the [character](https://esi.tech.ccp.is/latest/#/Character)
 * ESI endpoints. You should not require this module directly, as it technically
 * returns a factory function that requires an internal API. Instead an instance
 * is automatically exposed when the 
 * {@link module:eve_swagger_interface} is loaded and configured.
 *
 * This module also folds in smaller character-related end points that are not
 * large enough to warrant their own sub-module. It also exports sub-modules for
 * these larger end points, such as `calendar` and `mail`.
 *
 * @see https://esi.tech.ccp.is/latest/#/Character
 * @see https://esi.tech.cpp.is/latest/#/Assets
 * @see https://esi.tech.cpp.is/latest/#/Bookmarks
 * @see https://esi.tech.cpp.is/latest/#/Clones
 * @see https://esi.tech.cpp.is/latest/#/Killmails
 * @see https://esi.tech.cpp.is/latest/#/Location
 * @see https://esi.tech.ccp.is/latest/#/Planetary_Interaction
 * @see https://esi.tech.ccp.is/latest/#/Skills
 * @see https://esi.tech.ccp.is/latest/#/Wallet
 * @param api The internal API instance configured by the root module
 * @module character
 */
 module.exports = function(api) {
    var newRequest = api.newRequest;
    var newRequestOpt = api.newRequestOpt;
    var ESI = api.esi;

    var exports = {};

    /**
     * This is an instance of `calendar` module configured to use the
     * options provided to the factory. This instance uses a cache shared by the
     * other exposed APIs members.
     *
     * @constant {module:character/calendar}
     */
    exports.calendar = require('./calendar')(api);

    /**
     * This is an instance of `mail` module configured to use the
     * options provided to the factory. This instance uses a cache shared by the
     * other exposed APIs members.
     *
     * @constant {module:character/mail}
     */
    exports.mail = require('./mail')(api);

    /**
     * Get the names for a list of character ids from the ESI endpoint. 
     * This makes an HTTP GET request to [`characters/names/`](https://esi.tech.ccp.is/latest/#!/Character/get_characters_names).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "character_id": 95465499,
     *     "character_name": "CCP Bartender"
     *   }
     * ]
     * ```
     *
     * @param {Array.<Integer>} ids The character ids to look up
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Character/get_characters_names
     * @esi_link CharacterApi.getCharactersNames
     */
    exports.getNamesOf = function(ids) {
        return newRequest(ESI.CharacterApi, 'getCharactersNames', [ids]);
    };

    /**
     * Get the public info of the character from the ESI endpoint. 
     * This makes an HTTP GET request to [`characters/{id}/`](https://esi.tech.ccp.is/latest/#!/Character/get_characters_character_id).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "ancestry_id": 19,
     *   "birthday": "2015-03-24T11:37:00Z",
     *   "bloodline_id": 3,
     *   "corporation_id": 109299958,
     *   "description": "",
     *   "gender": "male",
     *   "name": "CCP Bartender",
     *   "race_id": 2
     * }
     * ```
     *
     * @param {Integer} id The character id to look up
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Characte/get_characters_character_id
     * @esi_link CharacterApi.getCharactersCharacterId
     */
    exports.get = function(id) {
        return newRequest(ESI.CharacterApi, 'getCharactersCharacterId', [id]);
    };

    /**
     * Get a character's corporation history from the ESI endpoint. This 
     * makes an HTTP GET request to [`characters/{id}/corporationhistory/`](https://esi.tech.ccp.is/latest/#!/Character/get_characters_character_id_corporationhistory).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "corporation_id": 90000001,
     *     "is_deleted": false,
     *     "record_id": 500,
     *     "start_date": "2016-06-26T20:00:00Z"
     *   },
     *   {
     *     "corporation_id": 90000002,
     *     "is_deleted": false,
     *     "record_id": 501,
     *     "start_date": "2016-07-26T20:00:00Z"
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Character/get_characters_character_id_corporationhistory
     * @esi_link CharacterApi.getCharactersCharacterIdCorporationHistory
     */
    exports.getCorporationHistory = function(id) {
        return newRequest(ESI.CharacterApi, 
                          'getCharactersCharacterIdCorporationHistory', [id]);
    };

    /**
     * Get a character's portrait URLs from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/portraits/`](https://esi.tech.ccp.is/latest/#!/Character/get_characters_character_id_portraits).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "px128x128": "https://imageserver.eveonline.com/Character/95465499_128.jpg",
     *   "px256x256": "https://imageserver.eveonline.com/Character/95465499_256.jpg",
     *   "px512x512": "https://imageserver.eveonline.com/Character/95465499_512.jpg",
     *   "px64x64": "https://imageserver.eveonline.com/Character/95465499_64.jpg"
     * }
     * ```
     *
     * @param {Integer} id The character id
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Character/get_characters_character_id_portraits
     * @esi_link CharacterApi.getCharactersCharacterIdPortraits
     */
    exports.getPortraits = function(id) {
        return newRequest(ESI.CharacterApi, 
                          'getCharactersCharacterIdPortraits', [id]);
    };

    /**
     * Get a character's assets from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/assets/`](https://esi.tech.ccp.is/latest/#!/Assets/get_characters_character_id_assets).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "is_singleton": true,
     *     "item_id": 1000000016835,
     *     "location_flag": "Hangar",
     *     "location_id": 60002959,
     *     "location_type": "station",
     *     "type_id": 3516
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Assets/get_characters_character_id_portraits
     * @esi_link AssetsApi.getCharactersCharacterIdPortraits
     */
    exports.getAssets = function(id, accessToken) {
        return newRequest(ESI.AssetsApi, 'getCharactersCharacterIdAssets', 
                          [id], accessToken);
    };

    /**
     * Get a character's personal bookmarks from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/bookmarks/`](https://esi.tech.ccp.is/latest/#!/Bookmarks/get_characters_character_id_bookmarks).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "bookmark_id": 32,
     *     "create_date": "2016-08-09T11:57:47Z",
     *     "creator_id": 90000001,
     *     "folder_id": 5,
     *     "memo": "aoeu ( Citadel )",
     *     "note": "",
     *     "owner_id": 90000001,
     *     "target": {
     *       "item": {
     *         "item_id": 1000000012668,
     *        "type_id": 35832
     *       },
     *       "location_id": 30000005
     *     }
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Bookmarks/get_characters_character_id_bookmarks
     * @esi_link BookmarksApi.getCharactersCharacterIdBookmarks
     */
    exports.getBookmarks = function(id, accessToken) {
        return newRequest(ESI.BookmarksApi, 'getCharactersCharacterIdBookmarks', 
                          [id], accessToken);
    };

    /**
     * Get a character's bookmark folders from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/bookmarks/folders/`](https://esi.tech.ccp.is/latest/#!/Bookmarks/get_characters_character_id_bookmarks_folders).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "folder_id": 5,
     *     "name": "Icecream",
     *     "owner_id": 90000001
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Bookmarks/get_characters_character_id_bookmarks_folders
     * @esi_link BookmarksApi.getCharactersCharacterIdBookmarksFolders
     */
    exports.getBookmarkFolders = function(id, accessToken) {
        return newRequest(ESI.BookmarksApi, 
                          'getCharactersCharacterIdBookmarksFolders', 
                          [id], accessToken);
    };

    /**
     * Get a character's clones state from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/clones/`](https://esi.tech.ccp.is/latest/#!/Clones/get_characters_character_id_clones).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "home_location": {
     *     "location_id": 1021348135816,
     *    "location_type": "structure"
     *   },
     *   "jump_clones": [
     *     {
     *       "implants": [
     *         22118
     *       ],
     *       "location_id": 60003463,
     *       "location_type": "station"
     *     },
     *     {
     *       "implants": [],
     *      "location_id": 1021348135816,
     *      "location_type": "structure"
     *     }
     *   ]
     * }
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Clones/get_characters_character_id_clones
     * @esi_link ClonesApi.getCharactersCharacterIdClones
     */
    exports.getClones = function(id, accessToken) {
        return newRequest(ESI.ClonesApi, 'getCharactersCharacterIdClones', 
                          [id], accessToken);
    };

    /**
     * Get recent kill mails for the given character via the ESI end point.
     * Up to `maxCount` mail ids and hashes will be returned, or up to 50 if
     * the count is not provided. Pagination is supported by specifying
     * `maxKillId`, in which case the most recent mails prior to the max id will
     * be returned.
     *
     * This makes an HTTP GET request to [`/characters/{characterId}/killmails/recent/`](https://esi.tech.ccp.is/latest/#!/Killmails/get_characters_character_id_killmails_recent).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "killmail_hash": "8eef5e8fb6b88fe3407c489df33822b2e3b57a5e",
     *     "killmail_id": 2
     *   },
     *   {
     *     "killmail_hash": "b41ccb498ece33d64019f64c0db392aa3aa701fb",
     *     "killmail_id": 1
     *   }
     * ]
     * ```
     * 
     * @param {Integer} characterId The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @param {Integer} maxKillId Optional; the mail id that limits which mails
     *   can be returned. If provided recent mails older than the id are returned
     * @param {Integer} maxCount Optional; the maximum number of mails to return,
     *   defaulting to 50.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Killmails/get_characters_character_id_killmails_recent
     * @see module:killmails.get
     * @esi_link KillmailsApi.getCharactersCharacterIdKillmailsRecent
     */
    exports.getKillmails = function(characterId, accessToken, maxKillId, 
                                    maxCount) {
        var opts = {};
        if (maxCount) {
            opts.maxCount = maxCount;
        } else {
            opts.maxCount = 50;
        }

        if (maxKillId) {
            opts.maxKillId = maxKillId;
        }
        return newRequestOpt(ESI.KillmailsApi, 
                             'getCharactersCharacterIdKillmailsRecent',
                             [characterId], opts, accessToken);
    };

    /**
     * Get a character's location from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/location/`](https://esi.tech.ccp.is/latest/#!/Location/get_characters_character_id_location).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "solar_system_id": 30002505,
     *   "structure_id": 1000000016989
     * }
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Location/get_characters_character_id_location
     * @esi_link LocationApi.getCharactersCharacterIdLocation
     */
    exports.getLocation = function(id, accessToken) {
        return newRequest(ESI.LocationApi, 'getCharactersCharacterIdLocation',
                          [id], accessToken);
    };

    /**
     * Get a character's current ship from the ESI endpoint. This makes 
     * an HTTP GET request to [`characters/{id}/ship/`](https://esi.tech.ccp.is/latest/#!/Location/get_characters_character_id_ship).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "ship_item_id": 1000000016991,
     *   "ship_name": "SPACESHIPS!!!",
     *   "ship_type_id": 1233
     * }
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Location/get_characters_character_id_ship
     * @esi_link LocationApi.getCharactersCharacterIdShip
     */
    exports.getShip = function(id, accessToken) {
        return newRequest(ESI.LocationApi, 'getCharactersCharacterIdShip',
                          [id], accessToken);
    };

    /**
     * Get a list of all planetary colonies owned by the character from the ESI 
     * endpoint. This makes an HTTP GET request to 
     * [`characters/{id}/planets/`](https://esi.tech.ccp.is/latest/#!/Planetary_Interaction/get_characters_character_id_planets).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "last_update": "2016-11-28T16:42:51Z",
     *     "num_pins": 1,
     *     "owner_id": 90000001,
     *     "planet_id": 40023691,
     *     "planet_type": "plasma",
     *     "solar_system_id": 30000379,
     *     "upgrade_level": 0
     *   },
     *   {
     *     "last_update": "2016-11-28T16:41:54Z",
     *     "num_pins": 1,
     *     "owner_id": 90000001,
     *     "planet_id": 40023697,
     *     "planet_type": "barren",
     *     "solar_system_id": 30000379,
     *     "upgrade_level": 0
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Planetary_Interaction/get_characters_character_id_planets
     * @esi_link PlanetaryInteractionApi.getCharactersCharacterIdPlanets
     */
    exports.getColonies = function(id, accessToken) {
        return newRequest(ESI.PlanetaryInteractionApi, 
                          'getCharactersCharacterIdPlanets',
                          [id], accessToken);
    };

    /**
     * Get the full layout of a planetary colony owned by the character from the
     * ESI endpoint. This makes an HTTP GET request to 
     * [`characters/{characterId}/planets/{planetId}`](https://esi.tech.ccp.is/latest/#!/Planetary_Interaction/get_characters_character_id_planets_planet_id).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "links": [
     *     {
     *       "destination_pin_id": 1000000017022,
     *       "link_level": 0,
     *       "source_pin_id": 1000000017021
     *     }
     *   ],
     *   "pins": [
     *     {
     *       "is_running": true,
     *       "latitude": 1.55087844973,
     *       "longitude": 0.717145933308,
     *       "pin_id": 1000000017021,
     *       "type_id": 2254
     *     },
     *     {
     *       "is_running": true,
     *       "latitude": 1.53360639935,
     *       "longitude": 0.709775584394,
     *       "pin_id": 1000000017022,
     *       "type_id": 2256
     *     }
     *   ],
     *   "routes": [
     *     {
     *       "content_type_id": 2393,
     *       "destination_pin_id": 1000000017030,
     *       "quantity": 20,
     *       "route_id": 4,
     *       "source_pin_id": 1000000017029
     *     }
     *   ]
     * }
     * ```
     *
     * @param {Integer} characterId The character id
     * @param {Integer} planetId The planet id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Planetary_Interaction/get_characters_character_id_planets_planet_id
     * @esi_link PlanetaryInteractionApi.getCharactersCharacterIdPlanetsPlanetId
     */
    exports.getColonyLayout = function(characterId, planetId, accessToken) {
        return newRequest(ESI.PlanetaryInteractionApi, 
                          'getCharactersCharacterIdPlanetsPlanetId',
                          [id], accessToken);
    };

    /**
     * Get the character's skill queue, sorted ascending by finishing time, from
     * the ESI endpoint. This makes an HTTP GET request to 
     * [`characters/{id}/skillqueue/`](https://esi.tech.ccp.is/latest/#!/Skills/get_characters_character_id_skillqueue).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "finish_date": "2016-06-29T10:47:00Z",
     *     "finished_level": 3,
     *     "queue_position": 0,
     *     "skill_id": 1,
     *     "start_date": "2016-06-29T10:46:00Z"
     *   },
     *   {
     *     "finish_date": "2016-07-15T10:47:00Z",
     *     "finished_level": 4,
     *     "queue_position": 1,
     *     "skill_id": 1,
     *     "start_date": "2016-06-29T10:47:00Z"
     *   },
     *   {
     *     "finish_date": "2016-08-30T10:47:00Z",
     *     "finished_level": 2,
     *     "queue_position": 2,
     *     "skill_id": 2,
     *     "start_date": "2016-07-15T10:47:00Z"
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Skills/get_characters_character_id_skillqueue
     * @esi_link SkillsApi.getCharactersCharacterIdSkillqueue
     */
    exports.getSkillQueue = function(id, accessToken) {
        return newRequest(ESI.SkillsApi, 'getCharactersCharacterIdSkillqueue',
                          [id], accessToken);
    };

    /**
     * Get the character's trained skills, sorted ascending by finishing time, 
     * from the ESI endpoint. This makes an HTTP GET request to 
     * [`characters/{id}/skills/`](https://esi.tech.ccp.is/latest/#!/Skills/get_characters_character_id_skills).
     * The request is returned as an asynchronous Promise that resolves to 
     * an object parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * {
     *   "skills": [
     *     {
     *       "current_skill_level": 1,
     *       "skill_id": 1,
     *       "skillpoints_in_skill": 10000
     *     },
     *     {
     *       "current_skill_level": 1,
     *       "skill_id": 2,
     *       "skillpoints_in_skill": 10000
     *     }
     *   ],
     *   "total_sp": 20000
     * }
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Skills/get_characters_character_id_skills
     * @esi_link SkillsApi.getCharactersCharacterIdSkills
     */
    exports.getSkills = function(id, accessToken) {
        return newRequest(ESI.SkillsApi, 'getCharactersCharacterIdSkills',
                          [id], accessToken);
    };

    /**
     * Get the character's wallets' balances from the ESI endpoint. This makes 
     * an HTTP GET request to 
     * [`characters/{id}/wallets/`](https://esi.tech.ccp.is/latest/#!/Wallet/get_characters_character_id_wallets).
     * The request is returned as an asynchronous Promise that resolves to 
     * an array parsed from the response JSON model. An example value looks 
     * like:
     *
     * ```
     * [
     *   {
     *     "balance": 295000,
     *     "wallet_id": 1000
     *   }
     * ]
     * ```
     *
     * @param {Integer} id The character id
     * @param {String} accessToken Optional; the access token to authenticate
     *   contact access of the sending character. If not provided, the default
     *   access token is used. This will fail if neither is available.
     * @return {external:Promise} A Promise that resolves to the response of
     *   the request
     * @see https://esi.tech.ccp.is/latest/#!/Wallet/get_characters_character_id_wallets
     * @esi_link WalletApi.getCharactersCharacterIdWallets
     */
    exports.getWallets = function(id, accessToken) {
        return newRequest(ESI.WalletApi, 'getCharactersCharacterIdWallets',
                          [id], accessToken);
    };

    return exports;
};