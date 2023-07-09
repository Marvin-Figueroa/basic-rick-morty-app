import useCharacters from '../hooks/useCharacters';

const CharacterGrid = () => {
  const { characters, error, isLoading } = useCharacters();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CharacterGrid;
