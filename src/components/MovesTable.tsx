import { Button, Table, Text } from '@mantine/core';
import { MoveProperties } from '../interfaces';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import physical from '../assets/physical move icon.png';
import special from '../assets/special move icon.png';
import status from '../assets/status move icon.png';

interface props {
  array?: MoveProperties[];
  arrayWithLevel?: {
    _id: MoveProperties;
    level: number;
  }[];
  hasLevel?: boolean;
}

const MovesTable = ({ array = [], arrayWithLevel = [], hasLevel = false }: props) => {
  const [levelUpMoves, setlevelUpMoves] = useState<{ _id: MoveProperties; level: number }[]>([]);

  useEffect(() => {
    if (arrayWithLevel.length !== 0) {
      const sorted = arrayWithLevel.sort((a, b) => a.level - b.level);
      setlevelUpMoves(sorted);
    }
  }, [arrayWithLevel]);
  if ((array.length === 0 && arrayWithLevel.length === 0) || (!array && !arrayWithLevel)) {
    return <Text>No move information available at this time</Text>;
  }
  return (
    <Table striped withTableBorder className="table">
      <Table.Thead>
        <Table.Tr>
          {hasLevel ? (
            <Table.Th>
              <Text ta="center">Level Learned</Text>
            </Table.Th>
          ) : null}
          <Table.Th>
            {' '}
            <Text ta="center">Move Name</Text>
          </Table.Th>
          <Table.Th>
            {' '}
            <Text ta="center">Move Type</Text>
          </Table.Th>
          <Table.Th>
            {' '}
            <Text ta="center">Move Group</Text>
          </Table.Th>
          <Table.Th>
            {' '}
            <Text ta="center">More Info</Text>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {array.length !== 0
          ? array.map((move) => {
              return (
                <Table.Tr key={move._id}>
                  <Table.Td>
                    <Text ta="center">{move.name}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text ta="center">{move.typing}</Text>
                  </Table.Td>
                  <Table.Td>
                    <img
                      src={move.type === 'Special' ? special : move.type === 'Physical' ? physical : move.type === 'Status' ? status : ''}
                      alt="Move group icon"
                      className="moveIcon"
                    />
                  </Table.Td>
                  <Table.Td>
                    <Button color="#008080" component={Link} to={`/moves/${move._id}`}>
                      More Info
                    </Button>
                  </Table.Td>
                </Table.Tr>
              );
            })
          : levelUpMoves.map((move) => {
              return (
                <Table.Tr key={move._id._id}>
                  <Table.Td>
                    <Text ta="center">{move.level}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text ta="center">{move._id.name}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text ta="center">{move._id.typing}</Text>
                  </Table.Td>
                  <Table.Td className="test">
                    <img
                      src={move._id.type === 'Special' ? special : move._id.type === 'Physical' ? physical : move._id.type === 'Status' ? status : ''}
                      alt="Move group icon"
                      className="moveIcon"
                    />
                  </Table.Td>
                  <Table.Td>
                    <Button color="#008080" component={Link} to={`/moves/${move._id._id}`}>
                      More Info
                    </Button>
                  </Table.Td>
                </Table.Tr>
              );
            })}
      </Table.Tbody>
    </Table>
  );
};

export default MovesTable;
