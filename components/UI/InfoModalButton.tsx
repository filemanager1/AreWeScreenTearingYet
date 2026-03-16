import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { ReactNode } from 'react';

interface InfoModalButtonProps {
  label: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function InfoModalButton({ label, title, children, icon }: InfoModalButtonProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title={title} centered size="lg">
        {children}
      </Modal>

      <Button variant="default" onClick={open} leftSection={icon}>
        {label}
      </Button>
    </>
  );
}
