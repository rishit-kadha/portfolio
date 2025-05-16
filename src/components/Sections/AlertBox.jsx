import { useAlertContext } from "@/context/alertContext";
import { Alert, CloseButton } from "@chakra-ui/react";
import { useRef } from "react";

const AlertBox = ({ response }) => {
  const { isOpen, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = response.type === "success";
  return (
    <Alert.Root
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      status={isSuccess ? "success" : "error"}
    >
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{isSuccess ? "All good!" : "Oops!"}</Alert.Title>
        <Alert.Description>{response.message}</Alert.Description>
      </Alert.Content>
      <CloseButton pos="relative" top="-2" insetEnd="-2" onClick={onClose} />
    </Alert.Root>
  );
};

export default AlertBox;
