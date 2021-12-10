import React, { useEffect, useState } from 'react';

import { PaginationParams, Pokemon } from 'models';

import { listPokemons } from 'use-cases/list-pokenons';

import * as S from './styles';

export const PokemonsPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [loading, setLoading] = useState(false);

  const [pagination] = useState<PaginationParams>({
    page: 1,
    itemsPerPage: 10
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const pokemonsList = await listPokemons(pagination);
        setPokemons(pokemonsList);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  if (loading) return <span>Carregando ...</span>;

  return (
    <S.Container>
      {pokemons.map(pokemon => (
        <section key={pokemon.id}>
          <h1>{pokemon.name}</h1>
        </section>
      ))}
    </S.Container>
  );
};
