/**
 * A container for the [contacts](https://esi.tech.ccp.is/latest/#/Contacts)
 * ESI endpoints. You should not require this module directly, as it technically
 * returns a factory function that requires an internal API. Instead an instance
 * is automatically exposed when the
 * {@link module:character} is loaded and configured.
 *
 * @see https://esi.tech.ccp.is/latest/#/Contacts
 * @param api The internal API instance configured by the root module
 * @module character/contacts
 */
module.exports = function(api) {
  var newRequest = api.newRequest;
  var newRequestOpt = api.newRequestOpt;
  var ESI = api.esi;

  var exports = {};

  /**
   * Get a page of contacts for the given character via the ESI end point. The `page` parameter controls which page
   * is selected. This makes an HTTP GET request to
   * [`/characters/{id}/contacts`](https://esi.tech.ccp.is/latest/#!/Contacts/get_characters_character_id_contacts).
   * The request is returned as an asynchronous Promise that resolves to an array parsed from the response
   * JSON model. An example value looks like:
   *
   * ```
   * [
   *   {
   *     "contact_id": 123,
   *     "contact_type": "character",
   *     "is_blocked": false,
   *     "is_watched": true,
   *     "standing": 10
   *   }
   * ]
   * ```
   *
   * @param {Integer} id The character id
   * @param {Integer} page The page to fetch, defaults to 1
   * @param {String} accessToken Optional; the access token to authenticate
   *   contact access of the sending character. If not provided, the default
   *   access token is used. This will fail if neither is available.
   * @return {external:Promise} A Promise that resolves to the response of
   *   the request
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/get_characters_character_id_contacts
   * @esi_link ContactsApi.getCharactersCharacterIdContacts
   */
  exports.get = function(id, page, accessToken) {
    return newRequestOpt(ESI.ContactsApi, 'getCharactersCharacterIdContacts', [id], {page: page}, accessToken);
  };

  /**
   * Remove contacts by their id from the given character's contact list via the ESI end point.
   * This makes an HTTP DELETE request to
   * [`/characters/{characterId}/contacts`](https://esi.tech.ccp.is/latest/#!/Contacts/delete_characters_character_id_contacts).
   * The request is returned as an asynchronous Promise that resolves to
   * an empty object from the response JSON model.
   *
   * @param {Integer} characterId The character id
   * @param {Array.<Integer>} contacts Array of contact ids
   * @param {String} accessToken Optional; the access token to authenticate
   *   contact access of the sending character. If not provided, the default
   *   access token is used. This will fail if neither is available.
   * @return {external:Promise} A Promise that resolves to the response of
   *   the request
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/delete_characters_character_id_contacts
   * @esi_link ContactsApi.deleteCharactersCharacterIdContacts
   */
  exports.remove = function(characterId, contacts, accessToken) {
    return newRequest(ESI.ContactsApi, 'deleteCharactersCharacterIdContacts', [characterId, contacts], accessToken);
  };

  var bulkAddContacts = function(characterId, contacts, standing, watched, label, accessToken) {
    var opts = { watched: watched };
    if (label) {
      opts.label = label;
    }

    return newRequestOpt(ESI.ContactsApi, 'postCharactersCharacterIdContacts', [characterId, standing, contacts],
      opts, accessToken);
  };

  /**
   * Bulk add contacts with the same settings to the given character's contact list via the ESI end point.
   * This makes an HTTP POST request to
   * [`/characters/{characterId}/contacts`](https://esi.tech.ccp.is/latest/#!/Contacts/post_characters_character_id_contacts).
   * The request is returned as an asynchronous Promise that resolves to
   * an array from the response JSON model. An example return value looks like:
   * ```
   * [
   *   123,
   *   456
   * ]
   * ```
   * The added contacts are unwatched.
   *
   * @param {Integer} characterId The character id
   * @param {Array.<Integer>} contacts Array of contact character ids to add
   * @param {Float} standing The standing for all contacts
   * @param {Integer} label Optional; custom label id to add contacts to
   * @param {String} accessToken Optional; the access token to authenticate
   *   contact access of the sending character. If not provided, the default
   *   access token is used. This will fail if neither is available.
   * @return {external:Promise} A Promise that resolves to the response of
   *   the request
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/post_characters_character_id_contacts
   * @esi_link ContactsApi.postCharactersCharacterIdContacts
   */
  exports.add = function(characterId, contacts, standing, label, accessToken) {
    return bulkAddContacts(characterId, contacts, standing, false, label, accessToken);
  };

  /**
   * Bulk add contacts with the same settings to the given character's contact list via the ESI end point.
   * This makes an HTTP POST request to
   * [`/characters/{characterId}/contacts`](https://esi.tech.ccp.is/latest/#!/Contacts/post_characters_character_id_contacts).
   * The request is returned as an asynchronous Promise that resolves to
   * an array from the response JSON model. An example return value looks like:
   * ```
   * [
   *   123,
   *   456
   * ]
   * ```
   * The added contacts are watched.
   *
   * @param {Integer} characterId The character id
   * @param {Array.<Integer>} contacts Array of contact character ids to add
   * @param {Float} standing The standing for all contacts
   * @param {Integer} label Optional; custom label id to add contacts to
   * @param {String} accessToken Optional; the access token to authenticate
   *   contact access of the sending character. If not provided, the default
   *   access token is used. This will fail if neither is available.
   * @return {external:Promise} A Promise that resolves to the response of
   *   the request
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/post_characters_character_id_contacts
   * @esi_link ContactsApi.postCharactersCharacterIdContacts
   */
  exports.addWatched = function(characterId, contacts, standing, label, accessToken) {
    return bulkAddContacts(characterId, contacts, standing, true, label, accessToken);
  };

  var bulkUpdateContacts = function(characterId, contacts, standing, watched, label, accessToken) {
    var opts = { watched: watched };
    if (label) {
      opts.label = label;
    } else {
      opts.label = 0;
    }

    return newRequestOpt(ESI.ContactsApi, 'putCharactersCharacterIdContacts', [characterId, standing, contacts],
      opts, accessToken);
  };

  /**
   * Bulk update contacts to the same settings in the given character's contact list via the ESI end point.
   * This makes an HTTP PUT request to
   * [`/characters/{characterId}/contacts`](https://esi.tech.ccp.is/latest/#!/Contacts/put_characters_character_id_contacts).
   * The request is returned as an asynchronous Promise that resolves to an empty object on success.
   * The updated contacts are set to unwatched.
   *
   * @param {Integer} characterId The character id
   * @param {Array.<Integer>} contacts Array of contact character ids to add
   * @param {Float} standing The standing for all contacts
   * @param {Integer} label Optional; custom label id to add contacts to. If not provided, the contact has its
   *   previous label removed
   * @param {String} accessToken Optional; the access token to authenticate
   *   contact access of the sending character. If not provided, the default
   *   access token is used. This will fail if neither is available.
   * @return {external:Promise} A Promise that resolves to the response of
   *   the request
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/put_characters_character_id_contacts
   * @esi_link ContactsApi.putCharactersCharacterIdContacts
   */
  exports.update = function(characterId, contacts, standing, label, accessToken) {
    return bulkUpdateContacts(characterId, contacts, standing, false, label, accessToken);
  };

  /**
   * Bulk update contacts to the same settings in the given character's contact list via the ESI end point.
   * This makes an HTTP PUT request to
   * [`/characters/{characterId}/contacts`](https://esi.tech.ccp.is/latest/#!/Contacts/put_characters_character_id_contacts).
   * The request is returned as an asynchronous Promise that resolves to an empty object on success.
   * The updated contacts are set to watched.
   *
   * @param {Integer} characterId The character id
   * @param {Array.<Integer>} contacts Array of contact character ids to add
   * @param {Float} standing The standing for all contacts
   * @param {Integer} label Optional; custom label id to add contacts to. If not provided, the contact has its
   *   previous label removed
   * @param {String} accessToken Optional; the access token to authenticate
   *   contact access of the sending character. If not provided, the default
   *   access token is used. This will fail if neither is available.
   * @return {external:Promise} A Promise that resolves to the response of
   *   the request
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/put_characters_character_id_contacts
   * @esi_link ContactsApi.putCharactersCharacterIdContacts
   */
  exports.updateWatched = function(characterId, contacts, standing, label, accessToken) {
    return bulkUpdateContacts(characterId, contacts, standing, true, label, accessToken);
  };

  /**
   * Get a list of custom labels for the given character's contacts via the ESI end point.
   * This makes an HTTP GET request to
   * [`/characters/{id}/contacts/labels`](https://esi.tech.ccp.is/latest/#!/Contacts/get_characters_character_id_contacts_labels).
   * The request is returned as an asynchronous Promise that resolves to an array parsed from the response
   * JSON model. An example value looks like:
   *
   * ```
   * [
   *   {
   *     "label_id": 123,
   *     "label_name": "Friends"
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
   * @see https://esi.tech.ccp.is/latest/#!/Contacts/get_characters_character_id_contacts_labels
   * @esi_link ContactsApi.getCharactersCharacterIdContactsLabels
   */
  exports.getLabels = function(id, accessToken) {
    return newRequest(ESI.ContactsApi, 'getCharactersCharacterIdContactsLabels', [id], accessToken);
  };

  return exports;
};