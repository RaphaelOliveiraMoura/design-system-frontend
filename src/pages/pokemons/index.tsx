import React from 'react';

import { Pagination } from 'components';

import * as S from './styles';
import { usePokemonsPage } from './hook';

export const PokemonsPage: React.FC = () => {
  const {
    pokemons,
    loading,
    pagination,
    handleClickPokemon,
    handleChangePage
  } = usePokemonsPage();

  if (loading) return <span>Carregando ...</span>;

  return (
    <S.Container>
      {pokemons.map(pokemon => (
        <section key={pokemon.id}>
          <button type='button' onClick={() => handleClickPokemon(pokemon)}>
            {pokemon.name}
          </button>
        </section>
      ))}
      <Pagination
        itemsPerPage={pagination.itemsPerPage}
        totalItems={pagination.total}
        currentPage={pagination.page}
        onChangePage={handleChangePage}
      />
    </S.Container>
  );
};
