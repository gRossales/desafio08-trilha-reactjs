import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody maxW={900} maxH={600} p="0">
          <Image src={imgUrl} w="100%" />
        </ModalBody>
        <ModalFooter
          bgColor="pGray.800"
          justifyContent="left"
          borderBottomRadius="5px"
          py="8px"
          px="10px"
          h="2rem"
        >
          <Link href={imgUrl} isExternal fontSize="0.875rem">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
