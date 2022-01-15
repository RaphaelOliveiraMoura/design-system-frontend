import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DetailedPokemon } from 'models';
import { Routes } from 'services/routes';
import { toast } from 'services/toast';
import { getPokemonDetails } from 'use-cases/get-pokemon-details';

export const usePokemonDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [pokemon, setPokemon] = useState<DetailedPokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!id) return;
        setLoading(true);
        const result = await getPokemonDetails({ id });
        setPokemon(result);
      } catch (error) {
        toast.error({
          title: 'Erro ao buscar detalhes do pokemon',
          error: error as Error
        });
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  const handleBackPage = () => navigate(Routes.POKEMONS_LIST());

  return {
    pokemon,
    loading,
    handleBackPage
  };
};
