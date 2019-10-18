import React from 'react';

import CharactersCard from '../CharactersCard';

const CharacterDetails = ({
  match: {
    params: { characterId },
  },
}) => {
  // const { edges: allPeople } = data.data.allPeople;

  // const currentCharacter = allPeople.find(character => {
  //   return character.node.characterId === Number(characterId);
  // });
  // const chracterDirectionCard = 'horizontal';
  return (
    <div>
      <CharactersCard
      // data={currentCharacter}
      // direction={chracterDirectionCard}
      />
    </div>
  );
};
export default CharacterDetails;
