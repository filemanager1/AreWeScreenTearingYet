import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <TextInput
      placeholder="Search compositors..."
      value={value}
      onChange={onChange}
      leftSection={<IconSearch size={16} />}
      radius="md"
      size="md"
    />
  );
}
