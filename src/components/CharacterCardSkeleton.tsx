import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const CharacterCardSkeleton = () => {
  return (
    <Card height='350px' maxWidth='280px' borderRadius='lg' overflow='hidden'>
      <Skeleton height='250px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CharacterCardSkeleton;
