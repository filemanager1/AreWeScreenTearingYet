import {Avatar, Box, Button, Card, Container, Group, Image, Paper, Stack, Text, TypographyStylesProvider} from '@mantine/core';
import classes from './ProjectIntro.module.css';
import { IconQuote } from '@tabler/icons-react';
import Link from "next/link";

export function ProjectIntro() {
   return(
       <>
           <Container size="lg" pb={20} mt={20}>
               <Stack align="center" gap="lg">
                   <Text className={classes.title}>
                       Are We Screen Tearing Yet?
                   </Text>
                   <Image
                       src="haimiyaTear.png"
                       alt="Haimiya Mio <3"
                       className={classes.image}
                       w="45%"
                       h="45%"
                       fit="contain"
                   />
                   <Text className={classes.subtitle}>
                       Tracking the state of Immediate Presentation (screen tearing) support across Linux Wayland compositors
                       with the purpose of improving their respective implementations to get a better user experience.
                   </Text>
               </Stack>
           </Container>
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
