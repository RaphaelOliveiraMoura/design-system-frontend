import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Pagination as PaginationModel, Pokemon } from 'models';
import { Pagination } from 'components';

import { listPokemons } from 'use-cases/list-pokenons';

import { Routes } from 'services/routes';
import { toast } from 'services/toast';
import * as S from './styles';

export const PokemonsPage: React.FC = () => {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [loading, setLoading] = useState(false);

  const [pagination, setPagination] = useState<PaginationModel>({
    page: 1,
    itemsPerPage: 10,
    total: 0
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { pokemons, total } = await listPokemons(pagination);
        setPokemons(pokemons);
        setPagination(state => ({ ...state, total }));
      } catch (error) {
        toast.error({
          title: 'Erro ao listar pokemons',
          error: error as Error
        });
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [pagination.page]);

  if (loading) return <span>Carregando ...</span>;

  return (
    <S.Container>
      {pokemons.map(pokemon => (
        <section key={pokemon.id}>
          <button
            type='button'
            onClick={() => navigate(Routes.POKEMONS_DETAILS(pokemon.id))}
          >
            {pokemon.name}
          </button>
        </section>
      ))}
      <Pagination
        itemsPerPage={pagination.itemsPerPage}
        totalItems={pagination.total}
        currentPage={pagination.page}
        onChangePage={page => setPagination(state => ({ ...state, page }))}
      />
    </S.Container>
  );
};
