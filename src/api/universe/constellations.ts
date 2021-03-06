import { Search, makeDefaultSearch } from '../../internal/search';
import { getNames } from '../../internal/names';
import { ESIAgent } from '../../internal/esi-agent';
import { Responses, esi } from '../../../gen/esi';

/**
 * An api adapter that provides functions for accessing various details for a
 * constellation specified by id, via functions in the
 * [universe](https://esi.evetech.net/latest/#/Universe) ESI endpoints.
 */
export interface Constellation {
  /**
   * @esi_example esi.constellations(id).info()
   *
   * @returns Information on a specific constellation
   */
  info(): Promise<Responses['get_universe_constellations_constellation_id']>;

  /**
   * @returns The ID of the constellation
   */
  id() : Promise<number>;
}

/**
 * An api adapter that provides functions for accessing constellation
 * information via the
 * [universe](https://esi.evetech.net/latest/#/Universe) and
 * [search](https://esi.evetech.net/latest/#/Search) ESI end points.
 */
export interface Constellations {
  /**
   * @esi_example esi.constellations()
   *
   * @returns List of all constellation ids
   */
  (): Promise<Responses['get_universe_constellations']>;

  /**
   * Create a new Constellation end point targeting the particular constellation
   * by `id`.
   *
   * @param id The constellation id
   * @returns A Constellation API wrapper for the given id.
   */
  (id: number): Constellation;

  /**
   * A Search module instance configured to search over the `'constellation'`
   * type.
   *
   * @esi_route get_search [constellation]
   * @esi_example esi.constellations.search('text')
   */
  search: Search;

  /**
   * @esi_route post_universe_names [constellation]
   * @esi_example esi.constellations.names()
   *
   * @param ids The constellation ids to resolve
   * @return Map from id to constellation name
   */
  names(ids?: number[]): Promise<Map<number, string>>;
}

/**
 * Create a new {@link Constellations} instance that uses the given `agent` to
 * make its HTTP requests to the ESI interface.
 *
 * @param agent The agent making actual requests
 * @returns An Constellations API instance
 */
export function makeConstellations(agent: ESIAgent): Constellations {
  let functor = <Constellations> <any> function (id?: number) {
    if (id === undefined) {
      return agent.request('get_universe_constellations', undefined);
    } else {
      return new ConstellationImpl(agent, id);
    }
  };

  functor.search = makeDefaultSearch(agent, esi.SearchCategory.CONSTELLATION);
  functor.names = function (ids?: number[]) {
    if (ids === undefined) {
      return functor().then(ids => {
        return functor.names(ids);
      });
    } else {
      return getNames(agent, esi.universe.NameCategory.CONSTELLATION, ids);
    }
  };

  return functor;
}

class ConstellationImpl implements Constellation {
  constructor(private agent: ESIAgent, private id_: number) {
  }

  info() {
    return this.agent.request('get_universe_constellations_constellation_id',
        { path: { constellation_id: this.id_ } });
  }

  id() {
    return Promise.resolve(this.id_);
  }
}
