import { Avatar, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core';
import classes from './ProjectIntro.module.css';
import { IconQuote } from '@tabler/icons-react';

export function ProjectIntro() {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar
          color="gray"
          radius="xl"
          size="lg"
        >
            <IconQuote size={28} />
        </Avatar>
        <div>
          <Text size="sm" fw={700}>Kristian Høgsberg</Text>
          <Text size="xs" c="dimmed">
            Creator of Wayland, 2008
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p><em>"The Wayland tag line is \'every frame is perfect\', by which I mean that applications will be able to control the rendering enough that <strong>we\'ll never see tearing</strong>, lag, redrawing or flicker."</em></p>',
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}
