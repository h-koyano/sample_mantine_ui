import React from 'react'
import { Layout } from '../components/Layout'
import { Button, Center, Dialog, Group, Text, TextInput } from '@mantine/core'
import { useDisclosure, useToggle } from '@mantine/hooks'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'

const MantineHooks = () => {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  })
  const [btnColor, toggleBtnColor] = useToggle('yellow', ['yellow', 'violet'])
  return (
    <Layout title="Hooks">
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
