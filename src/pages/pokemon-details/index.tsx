import React from 'react';

import { usePokemonDetailsPage } from './hook';

export const PokemonDetailsPage: React.FC = () => {
  const { pokemon, loading, handleBackPage } = usePokemonDetailsPage();

  if (loading) return <span>Carregando ...</span>;
  if (!pokemon)
    return <span>Falha ao carregar dados, tente novamente ...</span>;

  return (
    <main>
      id: {pokemon.id}
      nome: {pokemon.name}
      tipo: {pokemon.types[0]}
      <button type='button' onClick={handleBackPage}>
        Voltar para página inicial
      </button>
    </main>
  );
};
