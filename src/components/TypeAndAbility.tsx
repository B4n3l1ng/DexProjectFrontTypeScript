import PokemonProperties from '../interfaces';
import { Center } from '@mantine/core';
import { setTypeColor } from '../utils';
import { Link } from 'react-router-dom';

const TypeAndAbility = ({ type, abilities, hiddenAbility }: PokemonProperties) => {
  return (
    <section>
      <Center>
        <div className="typesAndAbility">
          <div className="typesBox boxWithRadius">
            <div className="drkBlueBox">Typing</div>
            {type.map((type) => (
              <div
                key={type}
                className="type"
                style={{
                  backgroundColor: `${setTypeColor(type)}`,
                }}
              >
                {type}
              </div>
            ))}
          </div>
          <div className="abilitiesBox boxWithRadius">
            <div className="drkBlueBox">Abilities</div>
            <div className="abilitiesTxt">
              {abilities.map((ability) => {
                return (
                  <Link to={`/ability/${ability._id}`} key={ability._id} className="whiteText">
                    {ability.name}
                  </Link>
                );
              })}
              {hiddenAbility ? (
                <span className="whiteText">
                  Hidden Ability:{' '}
                  <Link className="whiteText" to={`/ability/${hiddenAbility._id}`}>
                    {hiddenAbility.name}
                  </Link>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </Center>
    </section>
  );
};

export default TypeAndAbility;
