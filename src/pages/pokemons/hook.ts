import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Pagination as PaginationModel, Pokemon } from 'models';
import { toast } from 'services/toast';
import { listPokemons } from 'use-cases/list-pokenons';
import { Routes } from 'services/routes';

export const usePokemonsPage = () => {
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

  const handleClickPokemon = (pokemon: Pokemon) =>
    navigate(Routes.POKEMONS_DETAILS(pokemon.id));

  const handleChangePage = (page: number) =>
    setPagination(state => ({ ...state, page }));

  return {
    pokemons,
    loading,
    pagination,
    handleClickPokemon,
    handleChangePage
  };
};
