import {Avatar, Box, Button, Container, Group, Paper, Text, TypographyStylesProvider} from '@mantine/core';
import classes from './ProjectIntro.module.css';
import { IconQuote } from '@tabler/icons-react';
import Link from "next/link";

export function ProjectIntro() {
   return(
       <>
           <Group justify={'center'}>
               <img src="/haimiyaTear.png" alt="lmaooo" className={classes.image}/>
           </Group>

           <Container size="lg" pb={20} mt={20}>
               <Text className={classes.title}>
                   Are We Screen Tearing Yet?
               </Text>
           </Container>
           <Group justify="center" className={classes.subtitle}>
               <Text>
                   Tracking the state of Immediate Presentation (screen tearing) support across Linux Wayland compositors
                   with the purpose of improving their respective implementations to get a better user experience.
               </Text>
               <Button component={Link} href="/" variant="filled" size="md">
                   Why?
               </Button>
           </Group>
       </>
   );
}

export function ProjectQuote() {
  return (
          <Paper withBorder radius="md" className={classes.comment}>
          <Group>
              <Avatar
                  color="gray"
                  radius="xl"
                  size="lg"
              >
                  <IconQuote size={28}/>
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
                      __html: '<p><em>"The Wayland tag line is \'every frame is perfect\', by which I mean that applications will be able to control the rendering enough that <strong>we\'ll never see tearing</strong>, lag, redrawing or flicker."</em></p>',
                  }}/>
          </TypographyStylesProvider>
      </Paper>
  );
}
