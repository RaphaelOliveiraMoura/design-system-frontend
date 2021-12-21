import { DetailedPokemon } from 'models';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Routes } from 'services/routes';
import { toast } from 'services/toast';

import { getPokemonDetails } from 'use-cases/get-pokemon-details';

export const PokemonDetailsPage: React.FC = () => {
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

  if (loading) return <span>Carregando ...</span>;
  if (!pokemon)
    return <span>Falha ao carregar dados, tente novamente ...</span>;

  return (
    <main>
      id: {pokemon.id}
      nome: {pokemon.name}
      tipo: {pokemon.types[0]}
      <button type='button' onClick={() => navigate(Routes.POKEMONS_LIST())}>
        Voltar para página inicial
      </button>
    </main>
  );
};
