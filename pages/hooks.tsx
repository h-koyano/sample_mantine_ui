import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import {
  Button,
  Center,
  Dialog,
  Group,
  Paper,
  Text,
  TextInput,
} from '@mantine/core'
import { useDisclosure, useHover, useInterval, useToggle } from '@mantine/hooks'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'
import { intervalToDuration } from 'date-fns'

const MantineHooks = () => {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  })
  const [btnColor, toggleBtnColor] = useToggle('yellow', ['yellow', 'violet'])
  const [seconds, setSeconds] = useState(0)
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000)
  const { hovered, ref: refHover } = useHover()
  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  return (
    <Layout title="Hooks">
      <Group position="center" direction="column">
        <Text>
          This page is active <strong>{seconds}</strong> [s] after mount
        </Text>
        <Button
          compact
          onClick={interval.toggle}
          color={interval.active ? 'red' : 'teal'}
          variant="light"
        >
          {interval.active ? 'Suspend' : 'Activate'}
        </Button>
      </Group>
      <Group my="xl" direction="column" position="center">
        <Paper
          my="md"
          p="md"
          className={`h-40 w-40 cursor-pointer ${
            hovered ? 'bg-indigo-500' : 'bg-orange-500'
          }`}
          ref={refHover}
        ></Paper>
      </Group>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => handlers.close()}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="md">
          Subscribe to email newsletter
        </Text>
        <Group>
          <TextInput placeholder="xxx@sample.com" className="flex-1" />
          <Button onClick={() => handlers.close()}>Subscribe</Button>
        </Group>
      </Dialog>
      <Group direction="column" position="center">
        <Button compact onClick={() => handlers.toggle()}>
          Toggle dialog
        </Button>
        <Button color="cyan" compact onClick={() => handlers.open()}>
          Open dialog
        </Button>
        <Button color="orange" compact onClick={() => handlers.close()}>
          Close dialog
        </Button>

        <Button color={btnColor} compact onClick={() => toggleBtnColor()}>
          Toggle color
        </Button>
      </Group>
      <Center>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default MantineHooks
