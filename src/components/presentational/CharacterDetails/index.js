import React from 'react';
import CharactersCard from './../CharactersCard';
import { characters } from '../../containers/characters';

const CharacterDetails = ({
  match: {
    params: { characterId },
  },
}) => {
  const currentCharacter = characters.find(character => {
    return character.node.id === characterId;
  });
  const chracterDirectionCard = 'horizontal';
  return (
    <div>
      <CharactersCard
        data={currentCharacter.node}
        direction={chracterDirectionCard}
      />
    </div>
  );
};
export default CharacterDetails;
