import React from 'react';
import CharactersCard from './../CharactersCard';
import { useSelector } from 'react-redux';

const CharacterDetails = ({
  match: {
    params: { characterId },
  },
}) => {
  const characters = useSelector(state => state.characters);

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
